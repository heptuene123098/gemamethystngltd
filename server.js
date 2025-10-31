#!/usr/bin/env node
// Lightweight Express server to serve API endpoints locally during development.
// Provides /api/subscribe and /api/contact using Resend (reads RESEND_API_KEY from .env).

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';

// Load .env.local if present (common in many setups), otherwise fall back to .env
if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
  console.log('Loaded environment from .env.local');
} else {
  dotenv.config();
  console.log('Loaded environment from .env');
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'No Reply <no-reply@example.com>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const HAS_RESEND = Boolean(RESEND_API_KEY);
const DRY_RUN = String(process.env.DRY_RUN || '').toLowerCase() === 'true';
if (!HAS_RESEND && !DRY_RUN) {
  console.warn('Warning: RESEND_API_KEY not set. Email sending will fail until you set it in .env');
} else if (DRY_RUN) {
  console.log('DRY_RUN enabled: emails will not be sent (server will simulate sends)');
}

async function sendResendEmail({ to, subject, html }) {
  if (DRY_RUN) {
    console.log('[DRY_RUN] Simulating send to', to, 'subject:', subject);
    return { dryRun: true, to, subject };
  }

  if (!HAS_RESEND) throw new Error('RESEND_API_KEY not configured');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    const err = new Error(`Resend API error: ${res.status} ${text}`);
    err.status = res.status;
    throw err;
  }

  return res.json();
}

// Subscribe endpoint: accepts { email }
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body || {};
  if (!email || !email.includes('@')) return res.status(400).json({ message: 'Invalid email' });

  if (!HAS_RESEND) {
    return res.status(500).json({ message: 'Email service not configured. Set RESEND_API_KEY in your .env file.' });
  }

  try {
    console.log('Subscribe request received:', { email });

    // send confirmation to subscriber
    const subject = 'Thanks for subscribing!';
    const html = `<p>Thanks for subscribing with ${email}.</p><p>— The Team</p>`;
    const subResult = await sendResendEmail({ to: email, subject, html });
    console.log('Subscriber confirmation sent:', subResult);

    // notify admin (best-effort)
    if (ADMIN_EMAIL) {
      const adminHtml = `<p>New subscription: ${email}</p>`;
      sendResendEmail({ to: ADMIN_EMAIL, subject: 'New newsletter subscription', html: adminHtml }).then(r => console.log('Admin notified:', r)).catch((err) => console.error('Admin notify failed', err));
    }

    res.json({ success: true, message: 'Successfully subscribed to our newsletter!' });
  } catch (err) {
    console.error('Subscribe error:', err);
    res.status(502).json({ message: err.message || 'Failed to send email' });
  }
});

// Contact endpoint: accepts { name, email, subject, message }
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!email || !email.includes('@')) return res.status(400).json({ message: 'Invalid email' });

  if (!HAS_RESEND) {
    return res.status(500).json({ message: 'Email service not configured. Set RESEND_API_KEY in your .env file.' });
  }

  console.log('Contact request received:', { name, email, subject, message: message ? message.slice(0, 200) : '' });

  try {
    const adminSubject = subject || `New contact from ${email}`;
    const adminHtml = `
      <p>You received a new contact message:</p>
      <ul>
        <li><strong>Name:</strong> ${name || '—'}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Subject:</strong> ${subject || '—'}</li>
        <li><strong>Message:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : '—'}</li>
      </ul>
    `;

    const adminResult = await sendResendEmail({ to: ADMIN_EMAIL || FROM_EMAIL, subject: adminSubject, html: adminHtml });
    console.log('Admin email sent:', adminResult);

    const userHtml = `<p>Hi ${name || 'there'},</p><p>Thanks for reaching out. We received your message and will get back to you soon.</p>`;
    const userResult = await sendResendEmail({ to: email, subject: 'We received your message', html: userHtml });
    console.log('User confirmation sent:', userResult);

    res.json({ success: true, message: 'Message received' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(502).json({ message: err.message || 'Failed to send messages' });
  }
});

app.listen(PORT, () => {
  console.log(`Dev API server listening on http://localhost:${PORT}`);
});

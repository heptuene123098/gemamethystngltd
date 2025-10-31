// src/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Accept JSON body { name, email, subject, message }
  const { name, email, subject, message } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL || 'No Reply <no-reply@example.com>';
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // optional admin notification

  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  try {
    // Prepare email to admin (primary recipient) and optionally cc the sender
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

    // Send to admin (if ADMIN_EMAIL set) otherwise send to FROM_EMAIL's domain owner
    const primaryRecipient = ADMIN_EMAIL || FROM_EMAIL;

    const sendAdmin = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: primaryRecipient,
        subject: adminSubject,
        html: adminHtml,
      }),
    });

    // Optionally send a confirmation/receipt to the user
    const userConfirmHtml = `
      <p>Hi ${name || 'there'},</p>
      <p>Thanks for reaching out. We received your message and will get back to you soon.</p>
      <p><strong>Your message:</strong></p>
      <blockquote style="border-left:2px solid #ddd;padding-left:10px;">${message ? message.replace(/\n/g, '<br/>') : '—'}</blockquote>
      <p>— The Team</p>
    `;

    const sendUser = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: `We received your message${subject ? `: ${subject}` : ''}`,
        html: userConfirmHtml,
      }),
    });

    const [adminRes, userRes] = await Promise.all([sendAdmin, sendUser]);

    if (!adminRes || !adminRes.ok) {
      const txt = adminRes ? await adminRes.text() : 'no response';
      console.error('Resend admin send failed:', adminRes && adminRes.status, txt);
      // Continue to respond success to client but log the problem
    }

    if (!userRes || !userRes.ok) {
      const txt = userRes ? await userRes.text() : 'no response';
      console.error('Resend user send failed:', userRes && userRes.status, txt);
      // Not critical for request success
    }

    return res.status(200).json({ success: true, message: 'Message received' });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}

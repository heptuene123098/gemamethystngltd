// src/api/subscribe.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, name, message } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Resend configuration comes from environment variables
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL; // e.g. "Acme <no-reply@yourdomain.com>"
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // where admin notifications are sent

  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  try {
    // Simulate saving to database (replace with real DB call if needed)
    console.log('Subscribing email:', email, name ? `name=${name}` : '');

    // Prepare confirmation email to subscriber
    const confirmSubject = 'Thanks for subscribing!';
    const confirmHtml = `
      <p>Hi ${name ? name : 'there'},</p>
      <p>Thanks for subscribing to our newsletter. We're excited to keep you updated!</p>
      <p>If you didn't sign up or received this by mistake, just ignore this email.</p>
      <p> The Team</p>
    `;

    // Send confirmation to subscriber
    const sendToSubscriber = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL || 'No Reply <no-reply@example.com>',
        to: email,
        subject: confirmSubject,
        html: confirmHtml,
      }),
    });

    // Optionally send a notification to the admin/contact email with details
    let sendToAdmin = Promise.resolve();
    if (ADMIN_EMAIL) {
      const adminSubject = message ? 'New contact message' : 'New newsletter subscription';
      const adminHtml = `
        <p>There is a new ${message ? 'contact message' : 'subscription'}:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          ${name ? `<li><strong>Name:</strong> ${name}</li>` : ''}
          ${message ? `<li><strong>Message:</strong> ${message}</li>` : ''}
        </ul>
      `;

      sendToAdmin = fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL || 'No Reply <no-reply@example.com>',
          to: ADMIN_EMAIL,
          subject: adminSubject,
          html: adminHtml,
        }),
      });
    }

    // Await both requests
    const [subRes, adminRes] = await Promise.all([sendToSubscriber, sendToAdmin]);

    if (!subRes || !subRes.ok) {
      const text = subRes ? await subRes.text() : 'no response';
      console.error('Resend subscriber send failed:', subRes && subRes.status, text);
      return res.status(502).json({ message: 'Failed to send confirmation email' });
    }

    if (ADMIN_EMAIL && (!adminRes || !adminRes.ok)) {
      const text = adminRes ? await adminRes.text() : 'no response';
      console.error('Resend admin send failed:', adminRes && adminRes.status, text);
      // Don't fail the whole request if admin notification fails; still return success for subscriber
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to our newsletter. A confirmation email has been sent.',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    });
  }
}
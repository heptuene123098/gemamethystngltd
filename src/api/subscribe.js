// src/api/subscribe.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Here you would integrate with your email service
    // For example: Mailchimp, ConvertKit, SendGrid, etc.
    
    // Simulate saving to database
    console.log('Subscribing email:', email);
    
    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to our newsletter!' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again.' 
    });
  }
}
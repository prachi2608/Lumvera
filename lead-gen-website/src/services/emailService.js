import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // App password for Gmail
    }
  });
};

// Send contact form email
export const sendContactEmail = async (contactData) => {
  try {
    console.log('🔧 Creating email transporter...');
    const transporter = createTransporter();

    console.log('📧 Preparing email message...');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'prachiraval2608@gmail.com', // Default to user's email
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the contact form on your website.
          </p>
        </div>
      `,
      replyTo: contactData.email // Allow replying directly to the sender
    };

    console.log('📨 Sending email...');
    console.log('From:', mailOptions.from);
    console.log('To:', mailOptions.to);
    console.log('Subject:', mailOptions.subject);

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
    console.log('📊 Email details:', {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      response: result.response
    });
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error object:', error);

    // Check for common Gmail SMTP errors
    if (error.code === 'EAUTH') {
      console.error('🔐 AUTHENTICATION ERROR: Check your Gmail credentials');
      console.error('- Verify EMAIL_USER is correct');
      console.error('- Verify EMAIL_PASS is your Gmail app password (not regular password)');
      console.error('- Make sure 2FA is enabled on Gmail account');
    } else if (error.code === 'ENOTFOUND') {
      console.error('🌐 NETWORK ERROR: Cannot reach Gmail SMTP servers');
    } else if (error.code === 'ECONNREFUSED') {
      console.error('🚫 CONNECTION REFUSED: Gmail SMTP port may be blocked');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('⏰ TIMEOUT ERROR: Connection to Gmail SMTP timed out');
    }

    throw new Error(`Failed to send email: ${error.message}`);
  }
};

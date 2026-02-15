import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Resend with API key
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error('❌ RESEND_API_KEY environment variable is not set!');
  console.error('Please check your .env file and ensure RESEND_API_KEY is defined.');
}

const resend = new Resend(apiKey);

// Send contact form email
export const sendContactEmail = async (contactData) => {
  try {
    console.log('🔧 Initializing Resend client...');

    const data = await resend.emails.send({
      from: 'Lumvera Contact <onboarding@resend.dev>', // Use Resend's verified domain
      to: process.env.CONTACT_EMAIL || 'prachiraval2608@gmail.com',
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
      replyTo: contactData.email
    });

    // Check if the response contains an error
    if (data.error) {
      console.error('❌ Resend API returned an error:');
      console.error('Status Code:', data.error.statusCode);
      console.error('Message:', data.error.message);
      throw new Error(`Resend API Error: ${data.error.message}`);
    }

    console.log('✅ Email sent successfully via Resend!');
    console.log('📧 Email ID:', data.data?.id || 'No ID returned');
    return { success: true, messageId: data.data?.id };
  } catch (error) {
    console.error('❌ Error sending email via Resend:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error statusCode:', error.statusCode);
    console.error('Full error object:', error);

    // Check for common Resend errors
    if (error.statusCode === 401) {
      console.error('🔐 AUTHENTICATION ERROR: Check your RESEND_API_KEY');
      console.error('- Verify the API key is correct');
      console.error('- Make sure it starts with "re_"');
    } else if (error.statusCode === 403) {
      console.error('🚫 FORBIDDEN ERROR: Domain not verified');
      console.error('- Verify your sending domain in Resend dashboard');
      console.error('- Use a verified domain for the "from" address');
    } else if (error.statusCode === 422) {
      console.error('📝 VALIDATION ERROR: Check email format and required fields');
    }

    throw new Error(`Failed to send email: ${error.message}`);
  }
};

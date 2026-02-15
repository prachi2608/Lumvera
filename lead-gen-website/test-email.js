// Test script for email functionality
import dotenv from 'dotenv';
import { sendContactEmail } from './src/services/emailService.js';

// Load environment variables
dotenv.config();

console.log('🚀 Starting Email Test...');
console.log('📧 Testing Gmail SMTP Configuration');
console.log('=====================================');

// Test data
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '123-456-7890',
  message: 'This is a test message from the contact form. Please ignore this email.'
};

console.log('📝 Test Data:');
console.log('- Name:', testData.name);
console.log('- Email:', testData.email);
console.log('- Phone:', testData.phone);
console.log('- Message:', testData.message.substring(0, 50) + '...');
console.log('');

console.log('🔧 Environment Variables:');
console.log('- EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Not set');
console.log('- EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set (length: ' + process.env.EMAIL_PASS.length + ')' : '❌ Not set');
console.log('- CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'prachiraval2608@gmail.com');
console.log('');

async function testEmail() {
  try {
    console.log('📨 Attempting to send test email...');
    const result = await sendContactEmail(testData);
    console.log('');
    console.log('🎉 SUCCESS! Email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    console.log('');
    console.log('📬 Check your Gmail inbox for the test email.');
    console.log('📍 Look for: "New Contact Form Submission from Test User"');
  } catch (error) {
    console.log('');
    console.log('💥 EMAIL TEST FAILED!');
    console.log('❌ Error:', error.message);
    console.log('');
    console.log('🔍 Check the error logs above for detailed troubleshooting information.');
  }
}

// Run the test
testEmail();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { sendContactEmail } from './src/services/emailService.js';
import dotenv from 'dotenv';

// Load environment variables from .env file (for local testing)
dotenv.config();

// Force rebuild trigger - updated 2026-02-15

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

// Middleware to parse JSON
app.use(express.json());

// The dist directory should be in the same directory as server.js
const distPath = path.join(__dirname, 'dist');

console.log('Looking for dist at:', distPath);

// Check if dist exists
if (!fs.existsSync(distPath)) {
  console.error('ERROR: dist directory not found at:', distPath);
  console.error('Available directories in __dirname:', fs.readdirSync(__dirname));
  console.error('Please ensure the build completed successfully');
  process.exit(1);
}

// Check if index.html exists
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('ERROR: index.html not found at:', indexPath);
  console.error('Build may have failed or dist directory is incomplete');
  process.exit(1);
}

console.log('✅ Successfully found dist directory and index.html');
console.log('Serving static files from:', distPath);

// Serve static files from dist
app.use(express.static(distPath));

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^\S+@\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Send email
    await sendContactEmail({ name, email, phone, message });

    res.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// SPA fallback for React Router - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Serving files from: ${distPath}`);
  console.log(`🌐 Your app should be available at the Railway URL`);
});

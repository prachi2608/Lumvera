import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

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

// SPA fallback for React Router - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Serving files from: ${distPath}`);
  console.log(`🌐 Your app should be available at the Railway URL`);
});

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Determine the correct path to the dist directory
let distPath = path.join(__dirname, 'dist');

// Check if dist exists in current directory, if not try relative to project root
if (!fs.existsSync(distPath)) {
  distPath = path.join(__dirname, '..', '..', 'dist');
}

// Check if dist exists, if not log error
if (!fs.existsSync(distPath)) {
  console.error('Dist directory not found at:', distPath);
  console.error('Available directories in __dirname:', fs.readdirSync(__dirname));
  process.exit(1);
}

console.log('Serving static files from:', distPath);

// Serve static files from dist
app.use(express.static(distPath));

// SPA fallback for React Router - serve index.html for all non-API routes
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Index file not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving files from: ${distPath}`);
});

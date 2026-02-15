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

// Check if we're in the lead-gen-website directory
const isInLeadGenWebsite = __dirname.includes('lead-gen-website');
console.log('Is in lead-gen-website directory:', isInLeadGenWebsite);

// Determine the correct path to the dist directory
let distPath;

if (isInLeadGenWebsite) {
  // We're in /app/lead-gen-website, so dist should be at /app/lead-gen-website/dist
  distPath = path.join(__dirname, 'dist');
} else {
  // We're in /app, so dist should be at /app/lead-gen-website/dist
  distPath = path.join(__dirname, 'lead-gen-website', 'dist');
}

console.log('Looking for dist at:', distPath);

// Check if dist exists
if (!fs.existsSync(distPath)) {
  console.error('Dist directory not found at:', distPath);
  console.error('Available directories in __dirname:', fs.readdirSync(__dirname));

  // Try to find dist anywhere in the project
  const findDist = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (file === 'dist') {
          return fullPath;
        }
        try {
          const found = findDist(fullPath);
          if (found) return found;
        } catch (e) {
          // Skip directories we can't read
        }
      }
    }
    return null;
  };

  const foundDist = findDist(__dirname);
  if (foundDist) {
    console.log('Found dist at:', foundDist);
    distPath = foundDist;
  } else {
    console.error('Could not find dist directory anywhere');
    process.exit(1);
  }
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
    console.error('Index file not found at:', indexPath);
    res.status(404).send('Index file not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving files from: ${distPath}`);
});

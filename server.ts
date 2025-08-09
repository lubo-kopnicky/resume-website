// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();
// const port = 8080;

// // ESM equivalent of __dirname for file paths
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Get the path to the 'dist' directory
// const distPath = path.join(__dirname, 'dist');

// // Serve static files from the 'dist' directory
// app.use(express.static(distPath));

// // For any requests that don't match a static file, send back the index.html
// // This is crucial for client-side routing with React Router
// app.get('*', (req, res) => {
//   res.sendFile(path.join(distPath, 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
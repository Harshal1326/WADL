// Load HTTP module
const http = require('http');

// Define hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

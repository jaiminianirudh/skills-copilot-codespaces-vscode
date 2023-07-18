// Create web server
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response
  res.end('Hello, world!');
});

// Set the port and start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// server.js
import http from 'http';
let server = http.createServer((req, res) => {
  res.end('hello');
});
server.listen(3000, '127.0.0.1', function () {
  console.log('http://localhost:3000  server running');
});

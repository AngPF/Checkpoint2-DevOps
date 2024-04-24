// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Implantacao Efetuada com sucesso. Bom trabalho!.</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

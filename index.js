const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola Eddie bautista de unir\n');
});

const PORT = 80;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
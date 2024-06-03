const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola Mundo, por Eddie bautista de unir \n Url del mongo db es: '+`mongodb://${node.env.MONGODB_IP}:27017/`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

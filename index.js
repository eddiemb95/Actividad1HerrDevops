const http = require('http');
const { MongoClient } = require('mongodb');

const MONGODB_IP = process.env.MONGODB_IP || 'localhost'; // Usar la IP de MongoDB desde las variables de entorno

const url = `mongodb://${MONGODB_IP}:27017`;
const dbName = 'test'; // Nombre de la base de datos a la que te quieres conectar

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let connectionMessage = 'Conexión no establecida a MongoDB';

client.connect(err => {
  if (err) {
    console.error('Error al conectarse a MongoDB:', err);
  } else {
    console.log('Conexión exitosa a MongoDB');
    connectionMessage = 'Conexión exitosa a MongoDB';
  }

  // Cerrar la conexión después de 5 segundos
  setTimeout(() => {
    client.close();
  }, 5000);
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hola Mundo, por Eddie Bautista de UNIR \nURL de MongoDB es: ${url}\n${connectionMessage}`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

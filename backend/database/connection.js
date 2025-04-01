const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json()); // Para leer JSON en requests

// Configurar la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost:',
  user: 'root',
  password: 'root',
  database: 'Inventario'
});

db.connect((err) => {
  if (err) {
    console.log('Error conectando a la BD', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

// Endpoint para obtener datos
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM Usuarios', (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
});

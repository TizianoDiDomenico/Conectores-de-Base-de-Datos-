const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

const db = new sqlite3.Database('panaderia.db');

db.run(`CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    telefono TEXT,
    producto TEXT,
    cantidad INTEGER,
    retiro TEXT
)`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/pedidos', (req, res) => {
  const { nombre, telefono, producto, cantidad, retiro } = req.body;

  db.run(
    'INSERT INTO pedidos (nombre, telefono, producto, cantidad, retiro) VALUES (?, ?, ?, ?, ?)',
    [nombre, telefono, producto, cantidad, retiro],
    function(err) {
      if (err) {
        return res.status(500).send("Error al guardar el pedido");
      }
      res.send("¡Pedido guardado con éxito en la base de datos!");
    }
  );  
});


app.get('/ver-pedidos', (req, res) => {
  db.all('SELECT * FROM pedidos', [], (err, rows) => {
    if (err) {
      return res.status(500).send("Error al leer la base de datos");
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor andando en http://localhost:${PORT}`);
});
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// DB connection - service name 'db' use karenge
const db = mysql.createConnection({
  host: 'db', // docker-compose me service ka naam
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: 'shalini_db'
});

db.connect(err => {
  if (err) {
    console.log('DB connection failed:', err);
    return;
  }
  console.log('MySQL Connected - 15 LPA Loading...');
  
  // Table bana de agar nahi hai
  db.query('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))');
  db.query("INSERT IGNORE INTO users (id, name) VALUES (1, 'Shalini 15 LPA')");
});

app.get('/api', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({
      message: 'Shalini ka Backend Working',
      data: result,
      server: 'Node.js + Docker'
    });
  });
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));

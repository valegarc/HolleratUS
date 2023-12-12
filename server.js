const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'holleratus'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/api/tools', (req, res) => {

  res.json({ message: 'Data from MySQL' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'holleratus'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Create (POST)
app.post('/api/tools', (req, res) => {
  console.log(req);
  const { tool_id, tool_status, tool_type, tool_location, sharpened_date, mold_id, mold_type } = req.body;
  const query = 'INSERT INTO tools (tool_id, tool_status, tool_type, tool_location, sharpened_date, mold_id, mold_type) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [tool_id, tool_status, tool_type, tool_location, sharpened_date, mold_id, mold_type], (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Error creating task' });
    } else {
      res.status(201).json({ message: 'Tool created' });
    }
  });
});

// Read (GET)
app.get('/api/tools', (req, res) => {
  const query = 'SELECT * FROM tools';
  console.log('getting');
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving tasks:', err);
      res.status(500).json({ error: 'Error retrieving tasks' });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

// Update (PUT)
app.put('/api/tools/:id', (req, res) => {
  const { tool_status, tool_type, tool_location, sharpened_date, mold_id, mold_type } = req.body;
  const taskId = req.params.id;
  const query = 'UPDATE tools SET tool_status = ?, tool_type = ?, tool_location = ?, sharpened_date = ?, mold_id = ?, mold_type = ? WHERE tool_id = ?';

  db.query(query, [tool_id, tool_status, tool_type, tool_location, sharpened_date, mold_id, mold_type], (err, result) => {
    if (err) {
      console.error('Error updating task:', err);
      res.status(500).json({ error: 'Error updating task' });
    } else {
      res.json({ message: 'Tool updated' });
    }
  });
});

// Delete (DELETE)
app.delete('/api/tools/:id', (req, res) => {
  const taskId = req.params.id;
  const query = 'DELETE FROM tools WHERE tool_id = ?';

  db.query(query, [tool_id], (err, result) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).json({ error: 'Error deleting task' });
    } else {
      res.json({ message: 'Tool deleted' });
    }
  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

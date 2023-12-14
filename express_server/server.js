const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
server.use(bodyParser.json());

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306, 
  password: 'password', 
  database: 'holleratus', 
});

// db.connect((err) => {
//   if (err) {
//     console.log('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// app.get('/api/tools', (req, res) => {

//   res.json({ message: 'Data from MySQL' });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      console.log("successfully Connected to DB");
    }
  });

// run cmd when in the express_server file to check connection

  server.listen(5000,function check(error) {
    if (error) 
    {
    console.log("Error....!!!!");
    }

    else 
    {
        console.log("Started....!!!! 5000");

    }
});


// CREATE
server.post("/api/tool/add", (req, res) => {
  console.log("hello world");
    let details = {
      tool_id: req.body.tool_id,
      tool_status: req.body.tool_status,
      tool_type: req.body.tool_type,
      tool_location: req.body.tool_location,
      sharpened_date: req.body.sharpened_date,
      mold_id: req.body.mold_id,
      mold_type: req.body.mold_type,
    };
    let sql = "INSERT INTO tools SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Tool created Failed" });
      } else {
        res.send({ status: true, message: "Tool created successfully" });
      }
    });
  });


//view the Records
server.get("/api/tool", (req, res) => {
    var sql = "SELECT * FROM tools";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Search the Records

server.get("/api/tool/:id", (req, res) => {
    var studentid = req.params.id;
    var sql = "SELECT * FROM tools WHERE id=" + tool_id;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });



//Update the Records

server.put("/api/student/update/:id", (req, res) => {
    let sql =
      "UPDATE student SET stname='" +
      req.body.stname +
      "', course='" +
      req.body.course +
      "',fee='" +
      req.body.fee +
      "'  WHERE id=" +
      req.params.id;
  
    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "Student Updated Failed" });
      } else {
        res.send({ status: true, message: "Student Updated successfully" });
      }
    });
  });



  //Delete the Records

  server.delete("/api/student/delete/:id", (req, res) => {
    let sql = "DELETE FROM student WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Student Deleted Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });
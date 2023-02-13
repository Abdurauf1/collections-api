const express = require("express");
const db = require("./database/db");

const app = express();
const port = 5000;

app.get("/api/get", (req, res) => {
  const sqlInsert = "SELECT * FROM users_table";
  db.query(sqlInsert, (error, result) => {
    res.send(result)
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port);

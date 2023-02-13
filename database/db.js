const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected");
});

module.exports = connection;

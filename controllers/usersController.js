const db = require("../database/db");

// get users from database
const get_users = (req, res) => {
  const sqlGet = "SELECT * FROM signed_users";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};

// sign up
const signup_user = (req, res) => {
  const { name, email, password } = req.body;
  const sqlPost = "INSERT INTO signed_users (name, email, password) VALUES (?, ?, ?)";
  db.query(sqlPost, [name, email, password], error => {
    if (error) throw error;
  });
};

module.exports = {
  get_users,
  signup_user,
};

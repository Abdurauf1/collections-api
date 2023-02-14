const db = require("../database/db");

// get users from database
const get_users = (req, res) => {
  const sqlGet = "SELECT * FROM users_table";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};

// sign up
const signup_user = (req, res) => {
  const { name, email, password } = req.body;
  const sqlPost = "INSERT INTO users_table (name, email, password) VALUES (?, ?, ?)";
  db.query(sqlPost, [name, email, password], (error, result) => {
    if (error) {
      return error;
    }
  });
};

module.exports = {
  get_users,
  signup_user,
};

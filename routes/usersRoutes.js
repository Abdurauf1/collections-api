const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();
const { get_users, signup_user } = usersController;

router.get("/users", get_users);
router.post("/signup", signup_user);

module.exports = router;

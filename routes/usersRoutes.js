const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();
const { get_users, register_user } = usersController;

router.get("/users", get_users);
router.post("/register", register_user);

module.exports = router;

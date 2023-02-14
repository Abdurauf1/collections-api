const express = require("express");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
const port = 5000;

app.use("/api", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port);

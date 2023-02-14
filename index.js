const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port);

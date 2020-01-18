const express = require("express");
const connectToDatabase = require("./database");
const app = express();

connectToDatabase();
app.use(express.json());
app.use("/posts", (req, res) => {
  res.json("Hello world");
});

module.exports = app;

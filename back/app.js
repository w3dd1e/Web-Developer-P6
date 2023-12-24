const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET Request Called");
});

module.exports = app;

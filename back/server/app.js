const express = require("express");

const app = express();

app.use("/videos", (req, res) => {
  res.send("asdf");
});

module.exports = app;

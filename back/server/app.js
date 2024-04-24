const express = require("express");

const User = require("./models/user");
User.addUser();
const app = express();

app.use("/videos", (req, res) => {
  res.send("asdf");
});

module.exports = app;

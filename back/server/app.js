const express = require("express");
const app = express();
const user=require("./routes/userRoutes")

app.use("/user",user);

module.exports = app;

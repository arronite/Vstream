const express = require("express");

const videos = require("./routes/videos");

const app = express();

app.use("/videos", videos);

module.exports = app;

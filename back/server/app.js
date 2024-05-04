const express = require("express");
const app = express();
const user = require("./routes/userRoutes");
var bodyParser = require("body-parser");
const logger = require("./middleware/logger");
var cors = require("cors");

app.use(cors());

app.use([bodyParser.json(), bodyParser.urlencoded({ extended: true })]);

app.use(logger);

app.use("/user", user);

module.exports = app;

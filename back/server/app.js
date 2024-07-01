const express = require("express");
const app = express();
const user = require("./routes/userRoutes");
const films = require("./routes/filmsRouter");
var bodyParser = require("body-parser");
const logger = require("./middleware/logger");
var cors = require("cors");
const session = require("express-session");
const flash = require("express-flash");
const path = require("path");
const genres = require("./routes/genreRoutes");
const reviews = require("./routes/filmReveiws");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(cors({ origin: true, credentials: true }));

app.use([bodyParser.json(), bodyParser.urlencoded({ extended: true })]);

app.use(logger);

app.use("/user", user);

app.use("/films", films);

app.use("/genres", genres);

app.use("/reviews", reviews);

module.exports = app;

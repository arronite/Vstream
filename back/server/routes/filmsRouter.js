const express = require("express");
const router = express.Router();
const {
  allFilms,
  getFilm,
  getAlikeFilms,
  getGenreFilms,
} = require("../controller/filmsControler");

router.get("/", allFilms);
router.get("/:id", getFilm);
router.get("/search/:name", getAlikeFilms);
router.get("/genre/:genreId", getGenreFilms);

module.exports = router;

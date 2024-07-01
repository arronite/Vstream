const express = require("express");
const router = express.Router();
const { getAllGenres, getGenre } = require("../controller/genresControllers");

router.get("/", getAllGenres);
router.get("/:id", getGenre);

module.exports = router;

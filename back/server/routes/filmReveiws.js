const express = require("express");
const router = express.Router();
const { getReviews, postReviews } = require("../controller/reviewsController");

router.get("/:filmId", getReviews);
router.post("/post", postReviews);

module.exports = router;

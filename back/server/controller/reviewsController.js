const Reviews = require("../models/reviews");

module.exports = {
  getReviews: async (req, res) => {
    const filmId = req.params.filmId;
    const reviews = await Reviews.getMovieReviews(filmId);

    res.send(reviews);
  },
  postReviews: async (req, res) => {
    const userName = req.body.data.username;
    const { rating, text: review, videoId: filmId } = req.body;
    console.log(filmId, userName, rating, review);
    const result = await Reviews.postMovieReviews(
      filmId,
      userName,
      rating,
      review
    );

    // res.send(reviews);
  },
};

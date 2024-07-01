const { Sql } = require("../db/database");

class Reviews {
  static getMovieReviews = async (id) => {
    try {
      const results = await Sql(`SELECT * FROM reviews WHERE movie_id=$1`, [
        id,
      ]);

      return results.rows;
    } catch (error) {
      console.log(error);
    }
  };
  static postMovieReviews = async (movie_id, user, rating, review) => {
    try {
      console.log(movie_id, user, rating, review);
      const results = await Sql(
        `INSERT INTO reviews (movie_id, "user", rating, review) VALUES($1, $2, $3, $4)`,
        [movie_id, user, rating, review]
      );
      return results;
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = Reviews;

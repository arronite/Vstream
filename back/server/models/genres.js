const { Sql } = require("../db/database");

class Genres {
  static getAllGenres = async () => {
    try {
      const results = await Sql(`SELECT * FROM genres`);

      return results.rows;
    } catch (error) {
      console.log(error);
    }
  };
  static getGenre = async (id) => {
    try {
      const result = await Sql(`SELECT * FROM genres WHERE rand_id=$1`, [id]);
      console.log(result);
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = Genres;

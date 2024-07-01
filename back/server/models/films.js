const { Sql } = require("../db/database");

class Films {
  static getAllFilms = async () => {
    try {
      const result = await Sql(`SELECT * FROM films`);
      return result.rows;
    } catch (error) {
      return error;
    }
  };
  static getFilm = async (id) => {
    try {
      const result = await Sql(`SELECT * FROM films WHERE rand_id=$1`, [id]);
      return result.rows[0];
    } catch (error) {
      return error;
    }
  };
  static searchFilms = async (name) => {
    const search = name.toLowerCase();
    try {
      const result = await Sql(`SELECT * FROM films WHERE title LIKE $1`, [
        `%${search}%`,
      ]);
      return result.rows;
    } catch (error) {
      return error;
    }
  };
  static getGenreFilm = async (id) => {
    try {
      const result = await Sql(`SELECT * FROM films`);

      const genreRes = result.rows?.filter((movie) => movie.genre.includes(id));

      return genreRes;
    } catch (error) {
      return error;
    }
  };
}

module.exports = Films;

const Genres = require("../models/genres");

module.exports = {
  getAllGenres: async (req, res) => {
    const genres = await Genres.getAllGenres();
    res.send(genres);
  },
  getGenre: async (req, res) => {
    const rand_id = req.params.id;
    const genres = await Genres.getGenre(rand_id);
    res.json(genres);
  },
};
// 9364358214

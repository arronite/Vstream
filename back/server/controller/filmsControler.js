const Films = require("../models/films");
const Genres = require("../models/genres");
module.exports = {
  allFilms: async (req, res) => {
    try {
      const allFilm = await Films.getAllFilms();
      const genres = await Genres.getAllGenres();

      console.log("Fetched Films:", allFilm);
      console.log("Fetched Genres:", genres);

      const updatedFilms = allFilm.map((film) => {
        if (!Array.isArray(film.genre)) {
          console.error(
            "Film genres are not in the expected format:",
            film.genre
          );
          return film; // Return the film as is if the genre is not an array
        }

        const filmGenres = film.genre
          .map((genreId) => {
            const genreObj = genres.find((g) => g.rand_id === genreId);
            return genreObj ? genreObj.genre : null;
          })
          .filter((genre) => genre !== null); // Filter out null values

        return {
          ...film,
          genre: filmGenres,
        };
      });

      console.log("Updated Films with Genres:", updatedFilms);

      res.status(200).json(updatedFilms); // Send the updated films
    } catch (error) {
      console.error("Error fetching films or genres:", error);
      res.status(404).send(error); // Send error message with status code
    }
  },

  getFilm: async (req, res) => {
    try {
      const rand_id = req.params.id;
      const film = await Films.getFilm(rand_id);
      const genre = await Genres.getAllGenres();
      const updatedGenre = film.genre.map((genres) => {
        const updatedGenres = genre.find((g) => g.rand_id == genres);
        return updatedGenres ? updatedGenres.genre : null;
      });
      const dateString = film.release;
      const date = new Date(dateString);

      // Format the date as desired
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = date.toLocaleString("en-US", options);
      film.release = formattedDate;
      res.status(200);
      res.json({ ...film, genre: updatedGenre });
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  },
  getAlikeFilms: async (req, res) => {
    try {
      const name = req.params.name;
      const searchResults = await Films.searchFilms(name);
      res.status(200).json(searchResults);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  getGenreFilms: async (req, res) => {
    const id = req.params.genreId;
    const genreResult = await Films.getGenreFilm(id);
    res.status(200).json(genreResult);
  },
};

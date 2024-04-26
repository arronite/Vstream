import React from "react";
const movieGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Sport",
  "Thriller",
  "War",
  "Western",
];
export const Genre = () => {
  return (
    <div className="flex gap-12 flex-col w-1/6 ">
      <div className="flex w-full  glass px-4 py-5  ">
        <span className="text-3xl font-bold text-cyan-100">GENRE</span>
      </div>
      {movieGenres.map((genre) => (
        <div className="genreSelect" key={genre}>
          <span className=" text-lg text-gray-200">{genre}</span>
        </div>
      ))}
    </div>
  );
};

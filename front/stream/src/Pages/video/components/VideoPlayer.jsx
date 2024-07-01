export const VideoPlayer = ({ film }) => {
  if (!film || !film.url) {
    return <p className="text-center text-red-500">No video available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 glass shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-slate-50 text-center mb-6">
        {film.title}
      </h2>
      <video
        className="rounded-lg w-full h-full"
        controls
        controlsList="nodownload"
        poster={film.thumbnail}
      >
        <source src={film.url} type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

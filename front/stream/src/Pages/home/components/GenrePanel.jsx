import { useDataProvider } from "../../../data/dataProvider";

export const GenrePanel = () => {
  const { data: genres } = useDataProvider("http://localhost:5892/genres");
  return (
    <div className="flex gap-12 flex-col ">
      <div className="flex   glass px-4 py-5 rounded-br-2xl ">
        <span className="text-3xl font-bold text-cyan-100">GENRE</span>
      </div>
      {genres?.map((genre) => (
        <div
          onClick={() => {
            window.location.href = `/genres/${genre.rand_id}`;
          }}
          className="genreSelect"
          key={genre.rand_id}
        >
          <span className=" text-lg text-gray-200 px-3">{genre.genre}</span>
        </div>
      ))}
    </div>
  );
};

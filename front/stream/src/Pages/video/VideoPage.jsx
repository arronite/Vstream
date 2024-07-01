import { useParams } from "react-router-dom";
import { useDataProvider } from "../../data/dataProvider";

import CustomSwiper from "../home/components/CustomSwiper";
import { Container } from "../../Components/general/Container";
import { VideoPlayer } from "./components/VideoPlayer";
import ReviewList from "./components/ReviewList";

export const VideoPage = () => {
  const { videoId } = useParams();

  const { data: film, loading } = useDataProvider(
    `http://localhost:5892/films/${videoId}`
  );

  if (loading) return <div>Loading...</div>;

  return (
    film && (
      <Container>
        <div className="glass pb-10">
          <VideoPlayer film={film} />
          <div className="mx-5">
            <div></div>
            <div className="my-2">
              <span className="text-2xl  text-slate-400 font-semibold">
                {film.company}
              </span>
            </div>
            <div>
              <span className="text-3xl font-semibold">{film.release}</span>
            </div>
            <div>
              {film.genre.map((genre) => (
                <span key={genre}>{genre} </span>
              ))}
            </div>
            <div className="my-10">
              <span>{film.description}</span>
            </div>
            <a href={film.url}>
              <button className="bg-slate-900 hover:bg-cyan-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download</span>
              </button>
            </a>
          </div>
        </div>
        <CustomSwiper
          dataImages={film?.images}
          style={{ height: "400px", borderRadius: "10px" }}
        />
        <ReviewList videoId={videoId} />
      </Container>
    )
  );
};

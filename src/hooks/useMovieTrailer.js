import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useEffect(() => {
    !trailerVideo && getmovieVideos();
  }, []);

  const getmovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const movieTrailer = json.results.find((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(movieTrailer));
  };
};

export default useMovieTrailer;

import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  const movieNames = useSelector((store) => store.gpt.movieNames);
  console.log(gptMovies);

  if (movieNames === null) return null;

  return (
    <div className=" bg-gradient-to-t from-black">
      <div className="flex overflow-x-scroll scrollbar-hidden mt-16 sm:mt-64 z-50 relative bg-gradient-to-bl from-black">
        {movieNames.map((movie, i) => (
          <MovieList key={movie} title={movieNames[i]} movies={gptMovies[i]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

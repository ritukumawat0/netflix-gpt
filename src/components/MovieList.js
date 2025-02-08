import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg sm:text-3xl py-4 px-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} img={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

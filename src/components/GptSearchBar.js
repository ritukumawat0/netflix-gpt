import React from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import aiApi from "../utils/aiApi";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);

  //take a movie and make an tmdb movie api and get data

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleOpenApiCall = async () => {
    // console.log(searchText.current.value);
    // make an api call to gpt api and get movie results
    // const gptQuery =
    //   "Act as a Movie recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Gajini, Don, Golmaal ";
    // const getResults = await aiApi.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(getResults.choices);
    // const gptMovies = getResults.choices?.[0].message?.content.split(",");
    const gptMovies = [
      "Padmaavat",
      "Ghajini",
      "Golmaal",
      "Bajirao Mastani",
      "Dhoom 3",
      "Gully Boy",
      "Kabir Singh",
      "War",
      "Tanhaji",
      "Laxmii",
    ];

    const data = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%]">
      <div className="absolute -z-10 inset-0">
        <img
          src={BG_URL}
          alt="background"
          className="w-full opacity-100 h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="rounded-lg mx-auto w-[60%] bg-black p-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            className="rounded-md text-md w-[78%] mr-4 py-3 px-4 placeholder:text-md outline-none"
            type="text"
            placeholder={lang[language].searchPlaceholderText}
          />
          <button
            onClick={handleOpenApiCall}
            className="text-white rounded-md w-[20%] text-md px-2 py-3 bg-red-700"
          >
            {lang[language].Search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;

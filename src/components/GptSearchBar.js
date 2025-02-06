import React from "react";
import { BG_URL } from "../utils/constants";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const language = useSelector(store=>store.config.lang);
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
        <form>
          <input
            className="rounded-md text-md w-[78%] mr-4 py-3 px-2 placeholder:text-md outline-none"
            type="text"
            placeholder={lang[language].searchPlaceholderText}
          />
          <button className="text-white rounded-md w-[20%] text-md px-2 py-3 bg-red-700">
            {lang[language].Search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;

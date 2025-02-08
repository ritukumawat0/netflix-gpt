import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full pt-[18%] aspect-video px-6 sm:px-12 absolute text-white  bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">{title}</h1>
      <p className="hidden lg:block py-6 text-lg lg:w-1/2">{overview}</p>
      <div className="lg:mt-0 mt-8">
        <button className="px-4 sm:px-8 py-2 mr-4 text-sm sm:text-lg rounded-sm bg-white text-black border-black font-semibold">
        Play
        </button>
        <button className="px-4 sm:px-8 py-2 mr-4 text-sm sm:text-lg rounded-sm bg-gray-800 text-white border-black font-semibold">
         More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

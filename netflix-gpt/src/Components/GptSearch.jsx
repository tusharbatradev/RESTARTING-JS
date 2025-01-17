import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./gptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="fixed -z-10 w-full h-full">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

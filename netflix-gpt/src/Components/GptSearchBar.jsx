import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center items-center ">
      <form className="w-1/2 bg-black flex flex-col p-8 rounded-xl">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 w-[100%]"
        />
        <button className="p-2 bg-red-500 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>  
  );
};

export default GptSearchBar;

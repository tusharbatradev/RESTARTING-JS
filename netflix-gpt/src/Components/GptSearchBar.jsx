import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center items-center ">
      <form className="w-1/2 bg-black flex flex-col p-8 rounded-xl">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 w-[100%]"
        />
        <button className="p-2 bg-red-500 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

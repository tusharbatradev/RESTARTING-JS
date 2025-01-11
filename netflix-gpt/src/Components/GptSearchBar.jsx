import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const userInput = searchText.current.value;

    if (userInput.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    try {
      // Call the sendMessage function and dispatch the result
      await sendMessage(userInput, dispatch);
    } catch (error) {
      console.error("Error during GPT search:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black flex flex-col p-8 rounded-xl"
      >
        <input
          type="text"
          ref={searchText}
          placeholder="Type your movie genre or query"
          className="p-4 m-4 w-[100%]"
        />
        <button
          onClick={handleGptSearchClick}
          className="p-2 bg-red-500 text-white rounded-lg"
        >
          Search Movies
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const suggestedMovies = useSelector((store) => store.gpt.aiResponse);

  // Function to fetch movie data from TMDB API
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      const json = await response.json(); // Parse the JSON response
      return json.results; // Correctly access the `results` property
    } catch (error) {
      console.error("Error fetching movie data from TMDB:", error);
      return []; // Return an empty array in case of an error
    }
  };

  // Handle search button click
  const handleGptSearchClick = async () => {
    const userInput = searchText.current.value;

    if (userInput.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    try {
      // Dispatch the sendMessage action to get suggestions
      await sendMessage(userInput, dispatch);
    } catch (error) {
      console.error("Error during GPT search:", error);
    }
  };

  // React to changes in suggestedMovies
  useEffect(() => {
    const fetchTMDBResults = async () => {
      console.log("Suggested Movies", suggestedMovies)
      // Ensure `suggestedMovies` is an array
      const movieArray = Array.isArray(suggestedMovies)
        ? suggestedMovies
        : suggestedMovies.split(",").map((movie) => movie.trim());

      if (Array.isArray(movieArray) && movieArray.length > 0) {
        try {
          const promiseArray = movieArray.map((movie) =>
            searchMovieTMDB(movie)
          );
          const tmdbResults = await Promise.all(promiseArray);

          console.log("TMDB Results:", tmdbResults); // Log the API results
        } catch (error) {
          console.error("Error fetching TMDB results:", error);
        }
      } else {
        console.log(
          "suggestedMovies is not an array or is empty:",
          suggestedMovies
        );
      }
    };

    fetchTMDBResults();
  }, [suggestedMovies]);

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

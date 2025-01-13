import React, { useRef, useEffect, useState } from "react";
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
      const encodedMovie = encodeURIComponent(movie);
      console.log(
        `Fetching data for movie: "${movie}" (encoded: "${encodedMovie}")`
      );

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodedMovie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      console.log(
        "TMDB Request sent:",
        `https://api.themoviedb.org/3/search/movie?query=${encodedMovie}&include_adult=false&language=en-US&page=1`
      );

      if (!response.ok) {
        console.error(`Error: HTTP status ${response.status} for "${movie}"`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(`TMDB response for "${movie}":`, json); // Log the full response

      // Check if there are results and return them, else log a warning
      if (json.results && json.results.length > 0) {
        console.log(`Found ${json.results.length} result(s) for "${movie}"`);
        return json.results;
      } else {
        console.warn(`No results found for "${movie}" on TMDB.`);
        return [];
      }
    } catch (error) {
      console.error(`Error fetching movie from TMDB for "${movie}":`, error);
      return [];
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

      // Delay to ensure the Redux state is updated
      setTimeout(async () => {
        console.log("Suggested movies from GPT:", suggestedMovies);

        // Check if suggestedMovies is a valid array
        if (Array.isArray(suggestedMovies) && suggestedMovies.length > 0) {
          // Fetch movie data for all suggested movies
          const movieData = await Promise.all(
            suggestedMovies.map(async (movie) => {
              try {
                return await searchMovieTMDB(movie);
              } catch (error) {
                console.error(
                  `Error fetching data for movie "${movie}":`,
                  error
                );
                return [];
              }
            })
          );

          console.log("Fetched movie data from TMDB:", movieData.flat());
        } else {
          console.error("No suggested movies available to fetch from TMDB.");
        }
      }, 500); // Add a small delay before accessing the state
    } catch (error) {
      console.error("Error during GPT search:", error);
    }
  };

  // Log suggestedMovies when it updates
  useEffect(() => {
    if (suggestedMovies) {
      console.log("Updated Suggested Movies from Redux:", suggestedMovies);
    }
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

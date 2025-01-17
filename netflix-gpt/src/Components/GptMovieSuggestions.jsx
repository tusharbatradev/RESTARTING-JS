import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  // Movie Names
  const suggestedMovies = useSelector((store) => store.gpt.aiResponse);
  // TMDB Results
  const gptMovies = useSelector((store) => store.gpt.gptMovies);

  // Ensure `suggestedMovies` is an array
  const movieArray = Array.isArray(suggestedMovies)
    ? suggestedMovies
    : suggestedMovies?.split(",").map((movie) => movie.trim());

  if (!movieArray || movieArray.length === 0) {
    return (
      <h1 className="text-white">
        No suggestions available. Search for a movie!
      </h1>
    );
  }

  return (
    <div className="p-4 m-4 bg-black opacity-90 ">
      <div>
        {movieArray.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovies?.[index] || []} // Ensure movies are handled safely
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

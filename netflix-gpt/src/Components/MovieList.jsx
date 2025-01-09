import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 relative">
      <h1 className="text-4xl py-2 text-white">{title}</h1>
      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollContainer}
          className="flex gap-4 overflow-x-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflowY: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-auto"
                style={{
                  flex: "0 0 auto",
                }}
              >
                <MovieCard posterPath={movie.poster_path} />
              </div>
            ))
          ) : (
            <p>No movie data available</p>
          )}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="text-3xl ml-4 absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 text-white p-2 rounded-full shadow-md hover:bg-red-900 z-10"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="text-3xl mr-4 absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-700 text-white p-2 rounded-full shadow-md hover:bg-red-900 z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MovieList;

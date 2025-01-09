import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video pt-[15%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black hover:opacity-80 text-xl border-2 border-black p-2 w-40 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white text-xl border-2 border-black p-2 w-36 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

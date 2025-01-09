import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./GptSlice"; // Ensure the filename and case match

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer, // Ensure this matches the imported name
  },
});

export default appStore;

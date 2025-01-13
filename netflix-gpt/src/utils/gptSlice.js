import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false, // Controls whether the GPT search view is visible
    aiResponse: [], // Stores the AI's response (defaulted to an empty array for consistency)
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setAiResponse: (state, action) => {
      state.aiResponse = action.payload; // Sets the AI's response from the dispatched action
    },
    clearAiResponse: (state) => {
      state.aiResponse = []; // Clears the AI response and resets to an empty array
    },
  },
});

export const { toggleGptSearchView, setAiResponse, clearAiResponse } =
  gptSlice.actions;

export default gptSlice.reducer;

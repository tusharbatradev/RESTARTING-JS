import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    aiResponse: null, // To store the AI's response
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setAiResponse: (state, action) => {
      state.aiResponse = action.payload; 
    },
    clearAiResponse: (state) => {
      state.aiResponse = null; 
    },
  },
});

export const { toggleGptSearchView, setAiResponse, clearAiResponse } =
  gptSlice.actions;
export default gptSlice.reducer;

import axios from "axios";
import { OPENAI_KEY } from "./constants";

const API_URL = "https://api.aimlapi.com/v1/chat/completions";

export const sendMessage = async (userMessage, dispatch) => {
  try {
    // Truncate the user message if necessary to avoid exceeding limits
    const truncatedMessage = userMessage.slice(0, 200);

    // Make the API call
    const response = await axios.post(
      API_URL,
      {
        model: "google/gemma-2-27b-it",
        messages: [
          {
            role: "system",
            content:
              "You are an AI movie recommendation assistant. Provide a list of movies based on the user's input without asking any follow-up questions.",
          },
          {
            role: "user",
            content: truncatedMessage,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the AI response
    const botMessage = response.data.choices[0].message.content;

    // Dispatch the AI response to Redux store
    dispatch(setAiResponse(botMessage));

    // Return the AI response (optional, if you need to use it in the component directly)
    return botMessage;
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response ? error.response.data : error.message
    );

    // Optionally, you can dispatch an error response to the Redux store
    dispatch(
      setAiResponse("Failed to fetch response from AI. Please try again.")
    );
    throw error; // Re-throw the error to handle it in the component if needed
  }
};

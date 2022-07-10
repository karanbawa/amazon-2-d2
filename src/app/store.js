import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// The Global Store Setup - redux
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

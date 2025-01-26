import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/CounterSlice";
import LikedReducer from "./slices/LikedSlice";
//store js
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Liked: LikedReducer,
  },
});

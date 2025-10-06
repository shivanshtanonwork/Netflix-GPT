import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../utils/userSlice";
export const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

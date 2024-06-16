import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slice";

const rootReducer = combineReducers({
  game: gameSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

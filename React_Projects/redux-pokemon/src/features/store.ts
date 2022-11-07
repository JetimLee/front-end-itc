import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice";

export const store = configureStore({ reducer: pokemonReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

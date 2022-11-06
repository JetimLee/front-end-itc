import { configureStore } from "@reduxjs/toolkit";
import reserationsReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: { reservations: reserationsReducer },
});

//can access the type of the root state through this
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

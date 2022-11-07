import { configureStore } from "@reduxjs/toolkit";
import reserationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";
import countReducer from "../features/countSlice";

export const store = configureStore({
  reducer: {
    reservations: reserationsReducer,
    counter: countReducer,
    customers: customerReducer,
  },
});

//can access the type of the root state through this
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

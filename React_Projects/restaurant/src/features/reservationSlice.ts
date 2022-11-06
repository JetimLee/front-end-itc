import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  //initialize this state to hold whatever you want it to hold
  value: [],
};

//the slice deals with a certain aspect of the applcations data, much like useReducer and useContext

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    //the methods here update the state
    //could do something like this if I wanted to
    // add:(state) => {
    //     state.value.push("sdjnhsahjn")
    // }
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});
export const { addReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;

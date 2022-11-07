import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//have to set this up so TS knows the properties of the state that is being dealt with
interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  //initialize this state to hold whatever you want it to hold
  value: [],
};

//the slice deals with a certain aspect of the applcations data, much like useReducer and useContext

export const reservationsSlice = createSlice({
  //this is the reducers information, exporting it as default
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
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});
export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;

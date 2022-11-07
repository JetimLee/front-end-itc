import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountState {
  count: number;
}

const initialState: CountState = {
  //initialize this state to hold whatever you want it to hold
  count: 0,
};

//the slice deals with a certain aspect of the applcations data, much like useReducer and useContext

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    //the methods here update the state
    //could do something like this if I wanted to
    // add:(state) => {
    //     state.value.push("sdjnhsahjn")
    // }
    //state is something that redux itself will pass into the reducer
    increaseCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});
export const selectCount = (state: CountState) => state.count;
export const { increaseCount, decreaseCount } = countSlice.actions;

export default countSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//have to set this up so TS knows the properties of the state that is being dealt with
export interface Customer {
  id: string;
  food: string[];
  name: string;
}
interface AddFoodInterface {
  id: string;
  food: string;
}
interface CustomerState {
  customerReservations: Customer[];
}

const initialState: CustomerState = {
  //initialize this state to hold whatever you want it to hold
  customerReservations: [
    { id: "something", food: ["strawberries"], name: "gavin" },
  ],
};

//the slice deals with a certain aspect of the applcations data, much like useReducer and useContext

export const customerReservationsSlice = createSlice({
  //this is the reducers information, exporting it as default
  name: "customers",
  initialState,
  reducers: {
    //the methods here update the state
    //could do something like this if I wanted to
    // add:(state) => {
    //     state.value.push("sdjnhsahjn")
    // }
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customerReservations.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFoodInterface>) => {
      state.customerReservations.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});
export const { addCustomer, addFood } = customerReservationsSlice.actions;

export default customerReservationsSlice.reducer;

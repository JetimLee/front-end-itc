import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import { increaseCount, decreaseCount } from "./features/countSlice";
import { CustomerFoodCard } from "./components/CustomerFoodCard";
import { Customer } from "./features/customerSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customerReservations = useSelector(
    (state: RootState) => state.customers.customerReservations
  );
  //take a callback, gotta give it the state and the type of and then what you want back from that callback
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    //have to wrap this function with the dispatch for it to actually work
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  const handleCountIncrease = () => {
    dispatch(increaseCount(3));
  };
  const handleCountDecrease = () => {
    dispatch(decreaseCount(3));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <h4>Count: {count} </h4>
            <button onClick={handleCountIncrease}>Increase count</button>
            <button onClick={handleCountDecrease}>Decrease count</button>
            <div className="reservation-cards-container">
              {reservations.map((name, i) => {
                return <ReservationCard name={name} index={i} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(event) => setReservationNameInput(event.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customerReservations.map((customer: Customer) => {
            const { name, id, food } = customer;
            return (
              <CustomerFoodCard key={id} name={name} food={food} id={id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

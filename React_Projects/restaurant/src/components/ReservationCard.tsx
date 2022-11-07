import uuid from "react-uuid";
import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}
export function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(addCustomer({ name, food: [], id: uuid() }));
        dispatch(removeReservation(index));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

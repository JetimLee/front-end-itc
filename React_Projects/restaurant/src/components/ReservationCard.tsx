import React from "react";

interface ReservationCardTypes {
  name: string;
}
export function ReservationCard({ name }: ReservationCardTypes) {
  return <div className="reservation-card-container">{name}</div>;
}

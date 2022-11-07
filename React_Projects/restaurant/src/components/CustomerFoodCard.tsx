import React, { FC, MutableRefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

interface Props {
  name: string;
  id: string;
  food: string[];
}

export const CustomerFoodCard: FC<Props> = ({ name, id, food }) => {
  const foodRef = useRef() as MutableRefObject<HTMLInputElement>;

  const dispatch = useDispatch();
  function handleInputChange() {
    if (foodRef.current?.value !== "") {
      dispatch(addFood({ food: foodRef.current.value, id }));
    }
    foodRef.current.value = "";
  }
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((f) => {
            return <p>{f}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input ref={foodRef} />
          <button onClick={handleInputChange}>Add</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    console.log("use effect called in rating select!");
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    console.log(typeof e.target.value);
    let rating = parseFloat(e.target.value);
    setSelected(rating);
    select(rating);
  };

  return (
    <div>
      <ul className="rating">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingSelect;

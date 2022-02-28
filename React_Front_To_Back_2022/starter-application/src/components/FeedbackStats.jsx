import React from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackStats = () => {
  const { feedBack } = useContext(FeedbackContext);
  const calcAverage = () => {
    //good to use a reducer when needing an average/sum
    let average =
      feedBack.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0) / feedBack.length;
    //regex for replacing trailing zeroes
    return average.toFixed(1).replace(/[.,]0$/, "");
  };
  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedBack.length}</h4>
      <p>Average rating: {isNaN(calcAverage()) ? 0 : calcAverage()}</p>
    </div>
  );
};

// FeedbackStats.propType = {
//   feedBack: PropTypes.array,
// };

export default FeedbackStats;

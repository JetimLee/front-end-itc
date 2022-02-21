import React from "react";

const FeedbackStats = ({ feedBack }) => {
  const calcAverage = () => {
    //good to use a reducer when needing an average/sum
    let average = feedBack.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);
    return average / feedBack.length;
  };
  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedBack.length}</h4>
      <p>Average rating: {calcAverage()}</p>
    </div>
  );
};

export default FeedbackStats;

import React from "react";
import Card from "./UIComponents/Card";
import PropTypes from "prop-types";
const FeedbackItem = ({ rating, feedbackText, id }) => {
  //state is immutable in React
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       setRating(prev + 1);
  //     });
  //   };
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedbackText}</div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  feedbackText: PropTypes.string.isRequired,
};

export default FeedbackItem;

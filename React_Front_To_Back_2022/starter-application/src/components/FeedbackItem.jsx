import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./UIComponents/Card";
import PropTypes from "prop-types";
const FeedbackItem = ({ rating, feedbackText, id, deleteFeedbackItem }) => {
  //state is immutable in React
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       setRating(prev + 1);
  //     });
  //   };
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedbackItem(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedbackText}</div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  feedbackText: PropTypes.string.isRequired,
  deleteFeedbackItem: PropTypes.func.isRequired,
};

export default FeedbackItem;

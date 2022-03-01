import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./UIComponents/Card";
import PropTypes from "prop-types";
const FeedbackItem = ({ feed }) => {
  const { deleteFeedbackItem, editFeedback } = useContext(FeedbackContext);
  //state is immutable in React
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       setRating(prev + 1);
  //     });
  //   };
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>
      <button onClick={() => deleteFeedbackItem(feed.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(feed)} className="edit">
        <FaEdit color="yellow" />
      </button>
      <div className="text-display">
        <p>{feed.text}</p>
      </div>
    </Card>
  );
};
// FeedbackItem.propTypes = {
//   rating: PropTypes.number.isRequired,
//   feedbackText: PropTypes.string.isRequired,
//   deleteFeedbackItem: PropTypes.func.isRequired,
// };

export default FeedbackItem;

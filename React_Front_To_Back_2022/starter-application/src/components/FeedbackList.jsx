import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedBack }) => {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedback to display. </p>;
  }
  return (
    <div className="feedback-list">
      {feedBack.map((feed) => {
        return (
          <FeedbackItem
            id={feed.id}
            key={feed.id}
            rating={feed.rating}
            feedbackText={feed.text}
          />
        );
      })}
    </div>
  );
};
FeedbackList.propType = {
  feedBack: PropTypes.array,
};

export default FeedbackList;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedBack } = useContext(FeedbackContext);
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedback to display. </p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedBack.map((feed) => {
          return (
            <motion.div
              key={feed.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem feed={feed} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedBack.map((feed) => {
  //       return (
  //         <FeedbackItem
  //           deleteFeedbackItem={deleteFeedbackItem}
  //           id={feed.id}
  //           key={feed.id}
  //           rating={feed.rating}
  //           feedbackText={feed.text}
  //         />
  //       );
  //     })}
  //   </div>
  // );
};
// FeedbackList.propType = {
//   feedBack: PropTypes.array,
//   deleteFeedBackItem: PropTypes.func,
// };

export default FeedbackList;

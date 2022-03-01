import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBack, setFeedback] = useState([
    { id: 1, text: "this item is from context number 1", rating: 7 },
    { id: 2, text: "this item is from context number 2", rating: 8 },
    { id: 3, text: "this item is from context number 3", rating: 9 },
    { id: 4, text: "hungryyyyyyy", rating: 5 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //this will set the item to be updated
  //idea here is to create a new object and then insert it back into the array of objects
  const editFeedback = (item) => {
    console.log("editing!");
    setFeedbackEdit({ item, edit: true });
  };
  const deleteFeedbackItem = (id) => {
    console.log("clicked delete item");
    const updatedFeedbackList = feedBack.filter((feedbackItem) => {
      return feedbackItem.id !== id;
    });
    setFeedback(updatedFeedbackList);
  };
  const addFeedbackItem = (feedback) => {
    feedback.id = uuidv4();
    console.log("adding a feedback item");
    console.log("here is the feedback object");
    console.log(feedback);
    const updatedFeedback = feedBack.map((feedback) => {
      return feedback;
    });
    updatedFeedback.push(feedback);
    setFeedback(updatedFeedback);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedBack,
        deleteFeedbackItem,
        addFeedbackItem,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

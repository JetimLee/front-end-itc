import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBack, setFeedback] = useState([
    { id: 1, text: "this item is from context", rating: 69 },
  ]);
  return (
    <FeedbackContext.Provider value={{ feedBack }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

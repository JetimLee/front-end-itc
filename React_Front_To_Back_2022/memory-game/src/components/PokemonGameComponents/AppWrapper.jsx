// AppWrapper.jsx
import React from "react";
import { MemoryCardProvider } from "../../context/MemoryCardContext";
import App from "../../App";

const AppWrapper = ({ children }) => {
  return (
    <MemoryCardProvider>
      <App />
    </MemoryCardProvider>
  );
};

export default AppWrapper;

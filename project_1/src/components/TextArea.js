import React from "react";

const TextArea = (props) => {
  console.log(props);
  return (
    <div>
      <textarea onChange={(e) => props.handleChange(e)}></textarea>
      <div className="buttonContainer">
        <button onClick={() => props.submitHandler()}>Add note</button>
      </div>
    </div>
  );
};

export default TextArea;

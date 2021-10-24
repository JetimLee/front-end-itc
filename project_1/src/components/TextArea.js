import React from "react";
const TextArea = (props) => {
  console.log(props);
  return (
    <div className="input__textarea__container">
      <input
        onKeyPress={(e) => props.handleTitle(e)}
        placeholder="Title"
      ></input>
      <textarea
        placeholder="Your note..."
        onChange={(e) => props.handleChange(e)}
      ></textarea>
      <div className="buttonContainer">
        <button onClick={() => props.submitHandler()}>Add note</button>
      </div>
    </div>
  );
};

export default TextArea;

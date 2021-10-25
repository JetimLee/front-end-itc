import React from "react";
import TextareaAutosize from "react-textarea-autosize";
const TextArea = (props) => {
  return (
    <div className="input__textarea__container">
      <input onChange={(e) => props.handleTitle(e)} placeholder="Title"></input>
      <TextareaAutosize
        placeholder="Your note..."
        onChange={(e) => props.handleChange(e)}
      ></TextareaAutosize>
      <div className="buttonContainer">
        <button onClick={() => props.submitHandler()}>Add note</button>
      </div>
    </div>
  );
};

export default TextArea;

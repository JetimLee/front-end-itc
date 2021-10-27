import React, { useState, useEffect } from "react";
import "./Form.css";
import TextareaAutosize from "react-textarea-autosize";
import NoteCard from "./NoteCard";

const Form = ({
  title,
  notes,
  setNotes,
  noteText,
  changeHandler,
  submitHandler,
  titleHandler,
}) => {
  return (
    <div className="formContainer">
      <form>
        <h1>{title}</h1>
        <h1>{noteText}</h1>
        <input
          value={title}
          onChange={(e) => titleHandler(e)}
          placeholder="Enter your title..."
        ></input>
        <TextareaAutosize
          value={noteText}
          onChange={(e) => changeHandler(e)}
          placeholder="Enter your text..."
        />
        <div>
          <button onClick={(e) => submitHandler(e)}>Add note!</button>
        </div>
      </form>
      <div className="noteCardContainer"></div>
    </div>
  );
};

export default Form;

import React from "react";

const NoteCard = (props) => {
  console.log(props);
  return (
    <div className="note__card">
      <h1>Title: </h1>
      <p>Note: {props.text}</p>
      <p>ID: {props.id}</p>
      <p>Date created: {props.dateProp}</p>
      <button onClick={() => props.deleteNote(props.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;

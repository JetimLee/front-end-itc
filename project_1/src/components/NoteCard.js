import React from "react";

const NoteCard = (props) => {
  console.log(props);
  let hasTitle = props.title;

  return (
    <div className="note__card">
      {hasTitle !== "" ? <h1>Title: {props.title}</h1> : null}
      <p>Note: {props.text}</p>
      <p>ID: {props.id}</p>
      <p>Date created: {props.dateProp}</p>
      <button onClick={() => props.deleteNote(props.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;

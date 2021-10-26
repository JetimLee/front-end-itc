import React from "react";

const NoteCard = (props) => {
  let hasTitle = props.title;

  return (
    <div className="note__card">
      <div onClick={props.toggleModal} className="note__card__content">
        {hasTitle !== "" ? <h1>Title: {props.title}</h1> : null}
        <p>Note: {props.text}</p>
        <p>ID: {props.id}</p>
        <p>Date created: {props.dateProp}</p>
      </div>
      <button onClick={() => props.deleteNote(props.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;

import React, { useState } from "react";
import "./Container.css";
import Card from "./Card";
import NoteCard from "./NoteCard";

const Container = () => {
  let handleChange = (e) => {
    setNote(e.target.value);
  };
  let submitHandler = () => {
    setNotes([...notes, note]);
    console.log("this is notes");
    console.log(notes);
  };
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  return (
    <div className="container">
      <h1>container</h1>
      <p>This is the current note {note}</p>
      <Card submitHandler={submitHandler} handleChange={handleChange} />
      <div className="noteCardContainer">
        {notes.map((el, i) => {
          return <NoteCard text={notes[i]} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Container;

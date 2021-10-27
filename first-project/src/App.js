import "./App.css";
import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    setNoteText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    //need to add creation date to this
    setNotes([
      ...notes,
      { noteTitle: title, note: noteText, id: Math.random() * 1000 },
    ]);
    setNoteText("");
    setTitle("");
  };
  return (
    <div className="App">
      <Form
        title={title}
        notes={notes}
        setNotes={setNotes}
        noteText={noteText}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        titleHandler={titleHandler}
      />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const getDate = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    return dateTime;
    // console.log(dateTime);
  };
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
    // getDate();
    //need to add creation date to this
    setNotes([
      ...notes,
      {
        noteTitle: title,
        note: noteText,
        id: Math.random() * 1000,
        dateCreated: getDate(),
      },
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
      <NoteList setNotes={setNotes} notes={notes} />
    </div>
  );
}

export default App;

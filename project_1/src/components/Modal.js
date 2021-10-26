import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h1>Title: {props.title}</h1>
            <p>
              <strong>Note Content</strong>: {props.noteText}
            </p>
            <button onClick={props.toggleModal}>Close Modal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

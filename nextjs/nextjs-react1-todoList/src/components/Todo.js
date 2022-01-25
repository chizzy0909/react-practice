import React, { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

export const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteCard() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteCard}>
          Delete
        </button>
        {/* {modalIsOpen ? <Modal /> : null} */}
        {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
        {modalIsOpen && <Backdrop onClick={closeModal} />}
      </div>
    </div>
  );
};

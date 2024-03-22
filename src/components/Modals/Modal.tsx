import React, { ReactNode } from "react";
import "./modal.css";

type ModalProps = {
  closeModal: () => void;
};

export function Modal({ closeModal }: ModalProps) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={closeModal}>close</button>
        </div>

        <div className="title">
          <h2>Modal title </h2>
        </div>

        <div className="body">
          <p>Ma super modal de test from Youtube tutorial</p>
        </div>
        <div className="footer">
          <button onClick={closeModal} id="cancelBtn">
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

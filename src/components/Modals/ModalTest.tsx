import React, { ReactNode } from "react";
import "./modalTest.css";

type ModalTestProps = {
  handleClose: () => void;
  show: boolean;
  children: ReactNode;
};

export function ModalTest({ handleClose, show, children }: ModalTestProps) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div data-mika="mika" className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Fermer</button>
      </section>
    </div>
  );
}

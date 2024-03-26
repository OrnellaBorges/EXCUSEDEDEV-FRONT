import React from "react";

type ButtonProps = {
  tryGetRandomExcuse: () => void; // Fonction pour générer une nouvelle phrase
  animation: boolean;
};

export default function Button({ tryGetRandomExcuse, animation }: ButtonProps) {
  return (
    <button
      className={!animation ? "bouton hide" : "bouton show"}
      onClick={tryGetRandomExcuse}
    >
      New Excuse
    </button>
  );
}

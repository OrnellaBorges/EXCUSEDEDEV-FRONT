import React from "react";

type ButtonProps = {
  generateExcuse: () => void; // Fonction pour générer une nouvelle phrase
};

export default function Button({ generateExcuse }: ButtonProps) {
  return (
    <div>
      <button onClick={generateExcuse}>New Excuse</button>
    </div>
  );
}

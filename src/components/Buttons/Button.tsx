import React from "react";

type ButtonProps = {
  tryGetRandomExcuse: () => void; // Fonction pour générer une nouvelle phrase
};

export default function Button({ tryGetRandomExcuse }: ButtonProps) {
  return <button onClick={tryGetRandomExcuse}>New Excuse</button>;
}

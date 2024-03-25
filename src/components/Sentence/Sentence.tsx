import React from "react";

type SentenceProps = {
  excuse: string;
};
export default function Sentence({ excuse }: SentenceProps) {
  return (
    <div>
      <p>"{excuse}"</p>
    </div>
  );
}

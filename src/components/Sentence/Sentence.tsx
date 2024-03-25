import React from "react";
import { ExcuseType } from "../../types/ExcuseType";

type SentenceProps = {
  randomExcuse: ExcuseType | null;
  newExcuse: string;
};
export default function Sentence({ randomExcuse }: SentenceProps) {
  return (
    <div>
      <p>{randomExcuse ? `"${randomExcuse.content}"` : "Loading..."}</p>
    </div>
  );
}

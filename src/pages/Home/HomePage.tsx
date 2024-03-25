import "./HomeStyle.css";

import { ExcuseType } from "../../types/ExcuseType";
import Sentence from "../../components/Sentence/Sentence";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

type HomeProps = {
  randomExcuse: ExcuseType | null;
};

export function HomePage({ randomExcuse }: HomeProps) {
  const [excuse, setExcuse] = useState<string>("");

  // fonction pour le bouton qui génère des nouvelles excuses aléatoirement.
  const generateExcuse = () => {
    const newExcuse = "nouvelle excuse";
    console.log("newExcuse", newExcuse);
    setExcuse(newExcuse);
  };

  return (
    <main className="main-welcome">
      <section className="section-welcome">
        <h1 className="title-level1">EXCUSES DE DEV</h1>
        <Sentence randomExcuse={randomExcuse} newExcuse={excuse} />
        {/*  <button
        className="rounded-md bg-secondary-500 hover:bg-primary-500 p-2" 
        onClick={() => handleClick()} 
        >
          Random Button
        </button> */}
        <Button generateExcuse={generateExcuse} />
      </section>
    </main>
  );
}

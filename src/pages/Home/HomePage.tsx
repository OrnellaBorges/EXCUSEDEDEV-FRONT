import "./HomeStyle.css";

import { ExcuseType } from "../../types/ExcuseType";
import Sentence from "../../components/Sentence/Sentence";
import Button from "../../components/Buttons/Button";
import { useState, useEffect } from "react";

type HomeProps = {
  randomExcuse: ExcuseType | null;
  newExcuse: () => void;
};

export function HomePage({ randomExcuse, newExcuse }: HomeProps) {
  const [excuse, setExcuse] = useState<string>("");

  // fonction pour le bouton qui génère des nouvelles excuses aléatoirement.
  /* const generateExcuse = () => {
    const newExcuse = "nouvelle excuse";
    //console.log("newExcuse", newExcuse);
    setExcuse(newExcuse);
  }; */

  /*   useEffect(() => {
    generateExcuse();
  }, []); */

  return (
    <main className="main-welcome">
      <section className="section-welcome">
        <h1 className="title-level1">EXCUSES DE DEV</h1>
        {/* {excuse ? (
          <Sentence newExcuse={excuse} />
        ) : (
          <Sentence randomExcuse={randomExcuse} />
        )} */}
        <Sentence randomExcuse={randomExcuse} newExcuse={excuse} />
        {/*  <button
        className="rounded-md bg-secondary-500 hover:bg-primary-500 p-2" 
        onClick={() => handleClick()} 
        >
          Random Button
        </button> */}
        <Button generateExcuse={newExcuse} />
      </section>
    </main>
  );
}

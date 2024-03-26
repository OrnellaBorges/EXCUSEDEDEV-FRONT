import { useState, useEffect } from "react";

import Excuse from "../Excuse/Excuse";
import Button from "../Buttons/Button";

type ExcuseCardProps = {
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
};

export default function ExcuseCard({
  randomExcuse,
  tryGetRandomExcuse,
}: ExcuseCardProps) {
  // state du bouton et du titre
  const [displayAnimation, setDisplayAnimation] = useState<boolean>(false);

  // useEffect pour déclencher l'animation après le rendu initial
  useEffect(() => {
    const int = setTimeout(() => {
      // appel de la fonction showButtonAndUpTitle après 2 secondes
      setDisplayAnimation(true);
    }, 2000);

    // nettoyage du useEffect
    return () => clearTimeout(int);
  }, []);

  return (
    <div className="card">
      {/* <h1 className="title-level1 text-red-700"> Excuses de dev</h1> */}

      <h1 className={!displayAnimation ? "title" : "title move"}>Title</h1>

      <Excuse randomExcuse={randomExcuse} />

      <Button
        tryGetRandomExcuse={tryGetRandomExcuse}
        animation={displayAnimation}
      />
    </div>
  );
}

import { useState, useEffect } from "react";

import Excuse from "../Excuse/Excuse";
import Button from "../Buttons/Button";
import Loader from "../LoaderBonus/Loader";

type ExcuseCardProps = {
  isLoading: boolean;
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
  openModal: () => void;
};

export default function ExcuseCard({
  randomExcuse,
  tryGetRandomExcuse,
  openModal,
  isLoading,
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
      <h1 className={!displayAnimation ? "title" : "title move"}>
        Excuses de dev
      </h1>

      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Excuse randomExcuse={randomExcuse} />
      )}

      <Button
        tryGetRandomExcuse={tryGetRandomExcuse}
        animation={displayAnimation}
      />
      <button
        className={!displayAnimation ? "button hide" : "button show"}
        onClick={openModal}
      >
        Ajouter Excuse
      </button>
    </div>
  );
}

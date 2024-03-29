import { useState, useEffect } from "react";
import "./HomeStyle.css";
import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";

type HomeProps = {
  isLoading: boolean;
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
  openModal: () => void;
};

export function HomePage({
  isLoading,
  randomExcuse,
  tryGetRandomExcuse,
  openModal,
}: HomeProps) {
  const [moveUp, setMoveUP] = useState<boolean>(false);
  const [displayButtons, setDisplayButtons] = useState<boolean>(false);

  // useEffect pour déclencher l'animation après le rendu initial
  useEffect(() => {
    const int = setTimeout(() => {
      // on met a jour displayAnimation a true
      setMoveUP(true);
      setDisplayButtons(true);
    }, 2000);

    // nettoyage du useEffect
    return () => clearTimeout(int);
  }, []);

  return (
    <main className="main">
      <section className="section">
        <h1 className={!moveUp ? "title" : "title move"}>Excuses de dev</h1>
        <ExcuseCard
          isLoading={isLoading}
          randomExcuse={randomExcuse}
          tryGetRandomExcuse={tryGetRandomExcuse}
          openModal={openModal}
          animation={displayButtons}
        />
      </section>
    </main>
  );
}

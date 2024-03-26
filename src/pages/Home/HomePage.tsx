import "./HomeStyle.css";

import Sentence from "../../components/Sentence/Sentence";
import Button from "../../components/Buttons/Button";
import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";

type HomeProps = {
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
};

export function HomePage({ randomExcuse, tryGetRandomExcuse }: HomeProps) {
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
        <ExcuseCard
          randomExcuse={randomExcuse}
          tryGetRandomExcuse={tryGetRandomExcuse}
        />
      </section>
    </main>
  );
}

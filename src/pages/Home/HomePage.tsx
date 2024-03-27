import "./HomeStyle.css";

import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";

import Container from "../../components/Loader/Container";

type HomeProps = {
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
  openModal: () => void;
};

export function HomePage({
  randomExcuse,
  tryGetRandomExcuse,
  openModal,
}: HomeProps) {
  return (
    <main className="main">
      <section className="section">
        <ExcuseCard
          randomExcuse={randomExcuse}
          tryGetRandomExcuse={tryGetRandomExcuse}
          openModal={openModal}
        />
        <Container />
      </section>
    </main>
  );
}

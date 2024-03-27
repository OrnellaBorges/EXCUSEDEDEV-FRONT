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
  return (
    <main className="main">
      <section className="section">
        <ExcuseCard
          isLoading={isLoading}
          randomExcuse={randomExcuse}
          tryGetRandomExcuse={tryGetRandomExcuse}
          openModal={openModal}
        />
      </section>
    </main>
  );
}

import "./HomeStyle.css";

import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";

type HomeProps = {
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
};

export function HomePage({ randomExcuse, tryGetRandomExcuse }: HomeProps) {
  return (
    <main className="main">
      <section className="section">
        <ExcuseCard
          randomExcuse={randomExcuse}
          tryGetRandomExcuse={tryGetRandomExcuse}
        />
      </section>
    </main>
  );
}

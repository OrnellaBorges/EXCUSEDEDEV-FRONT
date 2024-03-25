import { Link } from "react-router-dom";
import "./HomeStyle.css";
import Sentence from "../../components/Sentence/Sentence";

type HomeProps = {
  excuse: string;
};

export function HomePage({ excuse }: HomeProps) {
  return (
    <main className="main-welcome">
      <section className="section-welcome">
        <h1 className="title-level1">EXCUSES DE DEV</h1>
        <Sentence excuse={excuse} />
        <button
          className="rounded-md bg-secondary-500 hover:bg-primary-500 p-2"
          onClick={() => console.log("hello")}
        >
          Random Button
        </button>
      </section>
    </main>
  );
}

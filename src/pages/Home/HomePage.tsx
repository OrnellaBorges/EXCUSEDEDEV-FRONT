import { Link } from "react-router-dom";
import "./HomeStyle.css";
import Sentence from "../../components/Sentence/Sentence";

export function HomePage() {
  return (
    <main className="main-welcome">
      <section className="section-welcome">
        <h1 className="title-level1">EXCUSES DE DEV</h1>
        <Sentence />
        <button>Boutton</button>
      </section>
    </main>
  );
}

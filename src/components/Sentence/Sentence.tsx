type SentenceProps = {
  randomExcuse: string | null;
};
export default function Sentence({ randomExcuse }: SentenceProps) {
  return (
    <p className="excuse">
      {randomExcuse ? `"${randomExcuse}"` : "Loading..."}
    </p>
  );
}

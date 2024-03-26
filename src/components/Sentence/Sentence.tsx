type SentenceProps = {
  randomExcuse: string | null;
};
export default function Sentence({ randomExcuse }: SentenceProps) {
  return (
    <div>
      <p>{randomExcuse ? `"${randomExcuse}"` : "Loading..."}</p>
    </div>
  );
}

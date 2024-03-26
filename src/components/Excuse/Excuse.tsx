type ExcuseProps = {
  randomExcuse: string | null;
};
export default function Excuse({ randomExcuse }: ExcuseProps) {
  return (
    <p className="excuse">
      {randomExcuse ? `"${randomExcuse}"` : "Loading..."}
    </p>
  );
}

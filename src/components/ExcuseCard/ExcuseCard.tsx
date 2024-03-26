import Sentence from "../Sentence/Sentence";
import Button from "../Buttons/Button";

type ExcuseCardProps = {
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
};

export default function ExcuseCard({
  randomExcuse,
  tryGetRandomExcuse,
}: ExcuseCardProps) {
  return (
    <>
      <h1 className="title-level1 text-red-700">EXCUSES DE DEV</h1>
      {/* {excuse ? (
      <Sentence newExcuse={excuse} />
    ) : (
      <Sentence randomExcuse={randomExcuse} />
    )} */}
      <Sentence randomExcuse={randomExcuse} />
      {/*  <button
    className="rounded-md bg-secondary-500 hover:bg-primary-500 p-2" 
    onClick={() => handleClick()} 
    >
      Random Button
    </button> */}
      <Button tryGetRandomExcuse={tryGetRandomExcuse} />
    </>
  );
}

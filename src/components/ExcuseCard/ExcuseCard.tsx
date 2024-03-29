import { useState, useEffect } from "react";

import Excuse from "../Excuse/Excuse";
import Button from "../Buttons/Button";
import Loader from "../LoaderBonus/Loader";

type ExcuseCardProps = {
  isLoading: boolean;
  randomExcuse: string | null;
  tryGetRandomExcuse: () => void;
  openModal: () => void;
  animation: boolean;
};

export default function ExcuseCard({
  randomExcuse,
  tryGetRandomExcuse,
  openModal,
  isLoading,
  animation,
}: ExcuseCardProps) {
  return (
    <div className="card">
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Excuse randomExcuse={randomExcuse} />
      )}

      <Button tryGetRandomExcuse={tryGetRandomExcuse} animation={animation} />
      <button
        className={!animation ? "button hide" : "button show"}
        onClick={openModal}
      >
        Ajouter Excuse
      </button>
    </div>
  );
}

type ButtonProps = {
  tryGetRandomExcuse: () => void; // Fonction pour générer une nouvelle phrase
  animation: boolean;
};

export default function Button({ tryGetRandomExcuse, animation }: ButtonProps) {
  return (
    <button
      className={!animation ? "button hide" : "button show"}
      onClick={tryGetRandomExcuse}
    >
      Random Excuse
    </button>
  );
}

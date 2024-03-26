import { useEffect } from "react";
// cette function declanche l'animation

export type StartAnimationProps = {
  showButtonAndUpTitle: () => void;
};

function StartAnimation({ showButtonAndUpTitle }: StartAnimationProps) {
  useEffect(() => {
    const int = setTimeout(() => {
      // appel de la fonction showButtonAndUpTitle après 2 de secondes
      showButtonAndUpTitle();
    }, 2000);
    return () => clearTimeout(int);
  }, []);
}

export default StartAnimation;

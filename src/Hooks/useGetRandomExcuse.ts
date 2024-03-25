import { useState, useEffect } from "react";
import { ExcuseType } from "../types/ExcuseType";
import { getRandomExcuse } from "../api/ExcusesApi";

export function useGetRandomExcuses() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [randomApiExcuse, setRandomExcuse] = useState<ExcuseType | null>(null);

  const tryGetRandomExcuse = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response /* : ResponsePlayerType */ = await getRandomExcuse();
      //àconsole.log("response hook", response);

      setRandomExcuse(response.data);
      setIsLoading(false);
      return response; // Retourner la réponse complète de l'API
    } catch (error) {
      console.error(
        "Erreur lors de la récupération d'une excuse aléatoire:",
        error
      );
      setIsLoading(false);
      setIsError(true);
      throw error;
    }
  };

  useEffect(() => {
    tryGetRandomExcuse();
  }, []);

  return {
    isError: isError,
    isLoading: isLoading,
    randomApiExcuse: randomApiExcuse,
    tryGetRandomExcuse,
  };
}

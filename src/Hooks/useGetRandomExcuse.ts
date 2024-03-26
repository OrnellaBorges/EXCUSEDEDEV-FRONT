import { useState, useEffect } from "react";
import { ApiExcuseType, ExcuseType } from "../types/ApiExcuseType";
import { getRandomExcuse } from "../api/ExcusesApi";

export function useGetRandomExcuses() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [randomExcuse, setRandomExcuse] = useState<string | null>(null);

  const tryGetRandomExcuse = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response: ApiExcuseType = await getRandomExcuse();
      // console.log("response hook", response);

      setRandomExcuse(response.data.content);
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
    isError,
    isLoading,
    randomExcuse,
    tryGetRandomExcuse,
  };
}

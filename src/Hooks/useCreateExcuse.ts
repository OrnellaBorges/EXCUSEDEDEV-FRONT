import { useState } from "react";
import { createNewExcuse } from "../api/ExcusesApi";
import { NewExcuseType } from "../types/ApiExcuseType";

export function useCreateExcuse() {
  const [newExcuse, setNewExcuse] = useState<{ tag: string; message: string }>({
    tag: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [isError, setIsError] = useState<boolean | null>(false);

  const createExcuse = async (element: NewExcuseType) => {
    setIsLoading(true);
    setIsError(false);
    console.log("je suis dans hook", element);

    try {
      console.log(
        "dans le try du hook de la fonction CreateNewExcuse",
        element
      );
      const tryCreateExcuse = await createNewExcuse(element);
      console.log("response", tryCreateExcuse);

      /* if (response.status === 200) {
        console.log("message ok le status api est 200");
      } */

      //console.log("Excuse created:", tryCreateExcuse.data);
      setIsError(false);
      //setNewExcuse(""); // Réinitialiser l'excuse après la création
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    newExcuse,
    isLoading,
    isError,
    createExcuse,
    setNewExcuse,
    setIsError,
  };
}

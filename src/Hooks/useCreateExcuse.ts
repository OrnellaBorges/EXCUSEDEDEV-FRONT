import { useState } from "react";
import { createOneExcuse } from "../api/ExcusesApi";

export function useCreateExcuse() {
  const [newExcuse, setNewExcuse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [isError, setIsError] = useState<boolean | null>(null);

  const createNewExcuse = async (newValue: string) => {
    //setIsLoading(true);
    //setIsError(null);
    console.log("newValue", newValue);

    try {
      console.log("new excuse dans hook", newValue);
      const tryCreateExcuse = await createOneExcuse(newValue);
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
    createNewExcuse,
    setNewExcuse,
    setIsError,
  };
}

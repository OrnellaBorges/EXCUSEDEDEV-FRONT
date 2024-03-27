import { useState } from "react";
import { createOneExcuse } from "../api/ExcusesApi";

export function useCreateExcuse() {
  const [newExcuse, setNewExcuse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [isError, setIsError] = useState<boolean | null>(null);

  const createExcuse = async (excuse: string) => {
    setIsLoading(true);
    setIsError(null);

    try {
      console.log("try", newExcuse);
      const response = await createOneExcuse(newExcuse);
      console.log("response", response);
      console.log("status", response.status);

      /* if (response.status === 200) {
        console.log("message ok le status api est 200");
      } */

      console.log("Excuse created:", response.data);
      setIsError(false);
      //setNewExcuse(""); // Réinitialiser l'excuse après la création
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { newExcuse, isLoading, isError, createExcuse, setNewExcuse };
}

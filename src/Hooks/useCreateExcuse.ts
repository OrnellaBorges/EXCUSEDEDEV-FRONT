import { useState } from "react";
import { createOneExcuse } from "../api/ExcusesApi";

export function useCreateExcuse() {
  const [newExcuse, setNewExcuse] = useState<string>("");

  const createNewExcuse = (formData: string) => {
    createOneExcuse(formData);
  };

  return [newExcuse, createNewExcuse];
}

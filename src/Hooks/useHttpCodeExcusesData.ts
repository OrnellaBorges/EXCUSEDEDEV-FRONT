import { useState, useEffect } from "react";
import { getAllExcuses } from "../api/ExcusesApi";

import {
  ApiHttpCodeExcuseType,
  HttpCodeExcuse,
  HttpCodeExcusesDataState,
  HttpCodeExcusesDataActions,
  HttpCodeExcusesDataHook,
} from "../types/HttpCodeExcuseType";

export function useHttpCodeExcusesData(): HttpCodeExcusesDataHook {
  // Initialiser le state
  const [HttpCodeExcusesData, setHttpCodeExcusesData] = useState<
    HttpCodeExcuse[]
  >([]);

  const tryGetAllExcuses = async () => {
    try {
      const res: HttpCodeExcuse[] = await getAllExcuses();
      console.log("res", res);
      setHttpCodeExcusesData(res);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération d'une excuse aléatoire:",
        error
      );
      throw error;
    }
  };

  useEffect(() => {
    tryGetAllExcuses();
  }, []);

  // Retourner le state et la fonction de mise à jour du state
  return { HttpCodeExcusesData, setHttpCodeExcusesData };
}

import { useState } from "react";
//import des types
import {
  HttpCodeExcuse,
  HttpCodeExcusesDataState,
  HttpCodeExcusesDataActions,
  HttpCodeExcusesDataHook,
} from "../types/HttpCodeExcuseType";

// hook personnalisé qui contient le state de la liste http_code
// POUR le typage je me suis aidé de ChatGpT car je comprenais rien du tout
export function useHttpCodeExcusesData(): HttpCodeExcusesDataHook {
  // state liste des http_code excuses
  const initialHttpCodeExcuseData: HttpCodeExcuse[] = [
    { http_code: 701, tag: "Inexcusable", message: "Meh" },
    { http_code: 702, tag: "Inexcusable", message: "Emacs" },
    { http_code: 720, tag: "Edge Cases", message: "Unpossible" },
    { http_code: 721, tag: "Edge Cases", message: "Known Unknowns" },
    { http_code: 722, tag: "Edge Cases", message: "Unknown Unknowns" },
    { http_code: 723, tag: "Edge Cases", message: "Tricky" },
  ];

  // state ???
  const [HttpCodeExcusesData, setHttpCodeExcusesData] = useState<
    HttpCodeExcuse[]
  >(initialHttpCodeExcuseData);

  //je retourne la liste et la fonction qui permet de modifier cette liste
  return { HttpCodeExcusesData, setHttpCodeExcusesData };
}

import { useState, useEffect } from "react";
//import Data from "../api/Data";
import { useParams, Navigate } from "react-router-dom";
import { useHttpCodeExcusesData } from "../Hooks/useHttpCodeExcusesData";

import "./httpCode.css";

export default function HttpCode() {
  const [redirect, setRedirect] = useState(false);
  // je recupère le code de l'url grace à useParams
  const { code } = useParams();
  console.log("code obtenu dans l'url: ", code);

  // je récupère également la liste des httpCode de mon hookperso et la fonction
  const { HttpCodeExcusesData, setHttpCodeExcusesData } =
    useHttpCodeExcusesData();
  console.log("HttpCodeExcusesData dans composant", HttpCodeExcusesData);

  // comparer le code recu du useParams avec  la liste du hook les datas dans le tableau des datas et touver le bon message:
  const excuseFounded = HttpCodeExcusesData.find(
    (element) => element.http_code === Number(code)
  );
  console.log("testExcuse", excuseFounded);

  // UE de redirection
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (!excuseFounded) {
        setRedirect(true);
      }
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [excuseFounded]); // se déclanche uniquement lorsque excuseFounded il y a quelque chose

  return (
    <div className="httpCode-Container">
      {excuseFounded ? (
        <div className="foundedCode">
          <p className="code">#{code}</p>
          <p className="excuseMessage">Excuse : {excuseFounded.message}</p>
        </div>
      ) : (
        <>
          <p className="missingCode">
            Code introuvable aucun message avec ce code{" "}
          </p>
          {redirect && <Navigate to="/" replace />}
        </>
      )}
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";

import { useGetRandomExcuses } from "./Hooks/useGetRandomExcuse"; // Import du hook
import { useState } from "react";

import "tailwindcss/tailwind.css";
import "./App.css";
import LostPage from "./pages/LostPage";
import NotFound from "./pages/NotFound";

export default function App() {
  /*  
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
 */

  const [excuse, setExcuse] = useState<string>("");
  const { isError, isLoading, randomExcuse, tryGetRandomExcuse } =
    useGetRandomExcuses();

  //console.log("randomExcuse dans app", randomApiExcuse);

  /* const [updateExcuse, setUpdateExcuse] = useState(); */

  // creer un state ici dans app qui va gerer l'état de la phrase
  //const [excuse, setExcuse] = useState<string>("Mon excuse de test");

  // un state qui se met a jour par un booleen si l'api renvoi une erreur ou pas
  // ce state va permettre d'afficher au client le composant error404 si il est false
  //const [apiStatus, setApiStatus] = useState<boolean>(true);

  /*  const toggleModalTest = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  }; */

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                randomExcuse={randomExcuse}
                tryGetRandomExcuse={tryGetRandomExcuse}
              />
            }
          />
          <Route path="/lost" element={<LostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

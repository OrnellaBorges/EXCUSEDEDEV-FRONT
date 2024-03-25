import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";

import { useState } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  // creer un state ici dans app qui va gerer l'état de la phrase
  const [quote, setQuote] = useState<string>("here is a quote");
  const [excuse, setExcuse] = useState<string>("Mon excuse de test");

  // un state qui se met a jour par un booleen si l'api renvoi une erreur ou pas
  // ce state va permettre d'afficher au client le composant error404 si il est false
  const [apiStatus, setApiStatus] = useState<boolean>(true);

  const toggleModalTest = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Layout handleModalOpen={toggleModalTest}>
        <Routes>
          <Route path="/" element={<HomePage excuse={excuse} />} />
          {/* <Route path="/test" element={<TestPage />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";
import LostPage from "./pages/LostPage";
import Error404 from "./pages/Error404";
import HttpCode from "./pages/HttpCode";
import { ModalTest } from "./components/Modals/modalTest";

import { useGetRandomExcuses } from "./Hooks/useGetRandomExcuse"; // Import du hook
import { useState } from "react";

import "tailwindcss/tailwind.css";
import "./App.css";

export default function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [excuse, setExcuse] = useState<string>("");
  const { isError, isLoading, randomExcuse, tryGetRandomExcuse } =
    useGetRandomExcuses();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && <ModalTest isOpen={openModal} setOpenModal={toggleModal} />}

      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isLoading={isLoading}
                randomExcuse={randomExcuse}
                tryGetRandomExcuse={tryGetRandomExcuse}
                openModal={toggleModal}
              />
            }
          />
          <Route path="/lost" element={<LostPage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/$http_code/:code" element={<HttpCode />} />
        </Routes>
      </Layout>
    </>
  );
}

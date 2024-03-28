import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./Pages/Home/HomePage";
import LostPage from "./Pages/LostPage";
import Error404 from "./Pages/Error404";
import HttpCode from "./Pages/HttpCode";
import { ModalTest } from "./components/Modals/ModalTest";

import { useGetRandomExcuses } from "./Hooks/useGetRandomExcuse";
import { useState } from "react";

import "tailwindcss/tailwind.css";
import "./App.css";

export default function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

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

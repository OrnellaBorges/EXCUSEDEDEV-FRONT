import { Header } from "./components/Header/Header";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
  handleModalOpen: () => void;
};

export function Layout({ children, handleModalOpen }: LayoutProps) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Header handleModalOpen={handleModalOpen} />
      {children}
    </>
  );
}

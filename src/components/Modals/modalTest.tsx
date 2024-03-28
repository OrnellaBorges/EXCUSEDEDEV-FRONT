import { useCreateExcuse } from "../../Hooks/useCreateExcuse";
import { Input } from "../Input/Input";

import "./modal.css";

type ModalProps = {
  isOpen: boolean;
  setOpenModal: () => void;
};

export function ModalTest({ isOpen, setOpenModal }: ModalProps) {
  const {
    newExcuse,
    isLoading,
    isError,
    createExcuse,
    setNewExcuse,
    setIsError,
  } = useCreateExcuse();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewExcuse((prevState) => ({ ...prevState, [name]: value }));
    console.log("newExcuse", newExcuse);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // gestion des erreurs de saisie à faire

    try {
      const tryAddExcuse = await createExcuse(newExcuse);
      return tryAddExcuse;
    } catch (error) {
      console.log(error);
    }

    //console.log("Excuse submitted dans le handlesubmit :", newExcuse);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="modalContainer">
        <button className="closeBtn" onClick={setOpenModal}>
          X
        </button>
        <h2 className="title-level2">Créez votre nouvelle excuse</h2>
        <form onSubmit={handleSubmit} className="form">
          <Input handleChange={handleInputChange} name="message" />
          <Input handleChange={handleInputChange} name="tag" />
          <button className="buttonValidation" type="submit">
            Valider
          </button>
        </form>
        {/* afficher un message si tou s'est bien passé*/}
      </div>
    </div>
  );
}

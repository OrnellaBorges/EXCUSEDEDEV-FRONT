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

  //console.log("excuse dans modal", newExcuse);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // gestion des erreurs de saisie à faire

    try {
      const tryAddExcuse = await createExcuse(newExcuse);
    } catch (error) {
      console.log(error);
    }

    // Vous pouvez implémenter la logique de validation ou d'enregistrement de l'excuse ici
    //createExcuse(e.target.value); // Appel à la fonction createExcuse
    console.log("Excuse submitted dans le handlesubmit :", newExcuse);
    // Réinitialiser le champ d'excuse après la soumission
    //setExcuse("");
    // Fermer la modal
    //setOpenModal();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="overlay">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <button className="close" onClick={setOpenModal}>
          X
        </button>
        <h2 className="title-level2">Créez votre nouvelle excuse</h2>
        <Input handleChange={handleInputChange} name="message" />
        <Input handleChange={handleInputChange} name="tag" />
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}

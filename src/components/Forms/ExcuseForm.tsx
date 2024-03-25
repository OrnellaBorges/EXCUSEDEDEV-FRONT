import { useState, useEffect } from "react";

export default function ExcuseForm() {
  const [newExcuse, setNewExcuse] = useState<string>();

  /*  const handleSubmitForm = (newExcuse) => {
    AddExcuse(excuse);

  }; */
  return (
    <form /* onSubmit={handleSubmitForm} */>
      <h2>Ajouter une excuse</h2>
      <input
        type="text"
        placeholder="Saisissez votre excuse"
        value={newExcuse}
        onChange={(e) => setNewExcuse(e.target.value)}
      />
      {/* Bouton pour valider et ajouter l'excuse */}
      <button type="submit">Valider</button>
    </form>
  );
}

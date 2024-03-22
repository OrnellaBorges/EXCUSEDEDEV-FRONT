import { useState } from "react";
import { Input } from "../../components/Input/Input";

export function JobForm() {
  return (
    <main>
      <form className="jobForm">
        <input type="text" placeholder="entreprise" />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

import { useState } from "react";
import UserList from "../../components/List/UsersList";
import InputSearch from "../../components/SearchFilter/InputSearch";

import "./style.css";

export default function TestPage() {
    const [letter, setLetter] = useState<string>("");
    return (
        <section className="sectionTest">
            <InputSearch onChange={setLetter} />
            <UserList letter={letter} />
        </section>
    );
}

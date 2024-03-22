import { useState } from "react";

type InputSearchProps = {
    onChange: (letter: string) => void;
};
export default function InputSearch({ onChange }: InputSearchProps) {
    return (
        <input
            className="inputField"
            type="text"
            placeholder="search"
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

import "./Header.css";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

type HeaderProps = {
  handleModalOpen: MouseEventHandler<HTMLButtonElement>;
};

export function Header({ handleModalOpen }: HeaderProps) {
  return (
    <header className="header">
      <div className="headerDiv">
        <Link to="/">
          <h1 className="logo">FOREACH HEADER</h1>
        </Link>
      </div>
    </header>
  );
}

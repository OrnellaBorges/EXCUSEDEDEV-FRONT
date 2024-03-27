import { useState } from "react";
import "./loader.css";

export default function Loader() {
  const [loaderState, setLoaderState] = useState(true);
  return (
    <div className="containerLoader">
      <div className={loaderState ? "loader show" : "loader hide"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

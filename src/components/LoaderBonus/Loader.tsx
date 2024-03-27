import { useState } from "react";
import "./loader.css";

type LoaderProps = {
  isLoading: boolean;
};

export default function Loader({ isLoading }: LoaderProps) {
  const [loaderState, setLoaderState] = useState(isLoading);
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

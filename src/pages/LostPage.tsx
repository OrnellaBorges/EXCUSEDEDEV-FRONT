import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lostGif from "../assets/lostGif.gif";

export default function LostPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="lostPage">
      <h2>I'm lost</h2>
      <figure className="gifContainer">
        <img src={lostGif} alt="Gif lost" />
      </figure>
    </div>
  );
}

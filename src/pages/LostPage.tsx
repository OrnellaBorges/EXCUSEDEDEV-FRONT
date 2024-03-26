import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gifImage from "../assets/loaderGif.webp";

export default function LostPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="lost-page">
      <h1>I’m lost</h1>
      <img src={gifImage} alt="Lost GIF" />
    </div>
  );
}

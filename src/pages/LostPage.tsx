import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import gifImage from "../assets/loaderGif.webp";
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
    <div className=" mx-auto border-solid  border-2 bg-slate-100 border-rose-500 rounded-md w-96 flex flex-col justify-center items-center h">
      <h1 className="text-3xl">You are lost</h1>
      <figure className="w-56 border-solid  border-2  border-blue-500 rounded-md my-4">
        <img src={lostGif} alt="Lost GIF" />
      </figure>
    </div>
  );
}

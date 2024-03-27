import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lostGif from "../assets/lostGif.gif";

export default function LostPage() {
  /*  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);
 */
  return (
    <div className="flex flew-grow flex-col justify-center items-center w-6/12 mx-auto border-3 border-solid border-black">
      <h2 className="text-5xl ">I'm lost</h2>
      <figure className="border-3 border-solid border-black">
        <img src={lostGif} alt="Gif image lost Travolta" />
      </figure>
    </div>
  );
}

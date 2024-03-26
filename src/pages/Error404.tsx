import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="w-full h-full items-center justify-center flex font-bold">
      <div className="text-center">
        <h1 className="text-8xl py-5">Oops! You seem to be lost.</h1>
        <p className="text-5xl py-5">Not a 404! But something like that!</p>
        <p>Here are some helpful links:</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

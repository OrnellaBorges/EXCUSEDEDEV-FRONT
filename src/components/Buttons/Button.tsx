import React from "react";

export default function Button() {
  return (
    <div>
      <button
        className="rounded-md bg-secondary-500 hover:bg-primary-500 p-2"
        onClick={() => console.log("hello")}
      >
        Button
      </button>
    </div>
  );
}

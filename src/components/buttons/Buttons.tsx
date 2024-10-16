import { useState } from "react";

const colors = ["lightcoral", "mediumseagreen", "lightseagreen"];
export default function Buttons() {
  const [color, setColor] = useState("gray");
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div
      className={`  flex justify-center  items-center gap-4 w-full h-screen`}
      style={{ backgroundColor: color }}
      data-testid="container"
    >
      {colors.map((color) => (
        <button
          style={{ backgroundColor: !isDisabled ? color : "lightgray" }}
          className="w-32  bg-amber-300 h-10 shadow-xl rounded-lg disabled:bg-gray-400 disabled:text-gray-700"
          disabled={isDisabled}
          onClick={() => setColor(color)}
        >
          {color}
        </button>
      ))}
      <button
        className="w-32 bg-amber-800 h-10 shadow-xl rounded-lg"
        onClick={() => {
          setColor("gray");
          setIsDisabled(!isDisabled);
        }}
      >
        party pooper
      </button>
    </div>
  );
}

import React from "react";
import "./Style.css";

function Buttons({ onButtonClick }) {
  const btn = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
    "C",
  ];

  return (
    <div className="btn">
      {btn.map((item, index) => (
        <input
          key={index}
          type="button"
          value={item}
          onClick={() => onButtonClick(item)}
        />
      ))}
    </div>
  );
}

export default Buttons;

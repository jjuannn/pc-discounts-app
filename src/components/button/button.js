import React from "react";
import "./button.css";

export default function Button({ text, disabled = null, onClick = () => {} }) {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {text}
    </button>
  );
}

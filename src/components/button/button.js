import React from "react";
import "./button.css";

export default function Button(props) {
  const { text } = props;
  return <button className="button">{text}</button>;
}

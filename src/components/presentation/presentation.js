import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import "./presentation.css";

export default function Presentation() {
  return (
    <>
      <p className="presentation-text">Find here the best Steam offers!</p>
      <Link className="presentation-button" to="#">
        <Button text="Get Started" />
      </Link>
    </>
  );
}

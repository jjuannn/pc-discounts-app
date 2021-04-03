import React from "react";
import Presentation from "../../components/presentation/presentation";
import gaben from "../../assets/gaben1.png";

import "./landing.css";

export default function LandingPage() {
  return (
    <>
      <div className="landing-container">
        <Presentation />
        <img className="landing-image" src={gaben} />
      </div>
    </>
  );
}

import React from "react";

export default function BottomDivider() {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        bottom: "14px",
      }}
    >
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fill: "#dee2e6",
          width: "400%",
          height: 60,
          transform: "rotate(180deg)",
        }}
      >
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    </div>
  );
}

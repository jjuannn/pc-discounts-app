import React from "react";

export default function TopDivider() {
  return (
    <div style={{ overflow: "hidden", position: "relative", bottom: "1px" }}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fill: "#dee2e6",
          width: "272%",
          height: 60,
          position: "relative",
          bottom: "7px",
        }}
      >
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    </div>
  );
}

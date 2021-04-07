import React from "react";
import TopDivider from "../divider/top";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <p className="header-title">
          <a className="title-anchor" href="/">
            Steam Discounts
          </a>
        </p>
      </header>
      <TopDivider />
    </>
  );
}

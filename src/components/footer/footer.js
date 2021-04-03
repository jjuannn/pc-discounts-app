import React from "react";
import BottomDivider from "../divider/bottom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <BottomDivider />
      <div className="footer-texts">
        <p className="footer-paragraph">
          Steam Discounts App made by{" "}
          <a rel="noreferrer" href="https://github.com/jjuannn" target="_blank">
            Juan Avero
          </a>
        </p>
        <p className="footer-paragraph">
          Consuming{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://apidocs.cheapshark.com/"
          >
            CheapShark API
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

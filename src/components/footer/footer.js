import React from "react";
import BottomDivider from "../divider/bottom";
import styled from "@emotion/styled";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  bottom: 0px;
  background: var(--gray2);
  font-size: 0.9em;
  font-family: var(--bold-kanit);
  z-index: 2;
`;

const FooterParagraph = styled.p`
  margin: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`;

const FooterTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <BottomDivider />
      <FooterTexts>
        <FooterParagraph>
          Steam Discounts App made by{" "}
          <a rel="noreferrer" href="https://github.com/jjuannn" target="_blank">
            Juan Avero
          </a>
        </FooterParagraph>
        <FooterParagraph>
          Consuming{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://apidocs.cheapshark.com/"
          >
            CheapShark API
          </a>{" "}
        </FooterParagraph>
      </FooterTexts>
    </Footer>
  );
}

import React from "react";
import Presentation from "../../components/presentation/presentation";
import gaben from "../../assets/gaben1.png";
import styled from "@emotion/styled";

const LandingContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
  z-index: 1;
  position: relative;
  top: 10px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export default function LandingPage() {
  return (
    <>
      <LandingContainer>
        <Presentation />
        <Img alt="" src={gaben} />
      </LandingContainer>
    </>
  );
}

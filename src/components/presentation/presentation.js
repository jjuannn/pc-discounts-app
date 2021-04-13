import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import styled from "@emotion/styled";

const PresentationText = styled.p`
  font-family: var(--bold-kanit);
  font-size: 30px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 8px;
  &:hover {
    background: black;
  }
`;

export default function Presentation() {
  return (
    <>
      <PresentationText>Find here the best Steam offers!</PresentationText>
      <StyledLink to="/offers/all/page=0">
        <Button text="Get Started" />
      </StyledLink>
    </>
  );
}

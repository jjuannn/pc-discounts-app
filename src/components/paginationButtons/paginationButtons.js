import React from "react";
import styled from "@emotion/styled";

const PaginationButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  & button {
    width: 17rem;
    margin: 2px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export default function PaginationButtonsComponent({ children }) {
  return <PaginationButtonsContainer>{children}</PaginationButtonsContainer>;
}

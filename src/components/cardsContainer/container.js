import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;

export default function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}

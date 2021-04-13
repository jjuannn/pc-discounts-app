import React from "react";
import styled from "@emotion/styled";

const ErrorMessage = styled.p`
  font-family: var(--bold-kanit);
  font-size: 3em;
  color: rgb(175, 63, 63);
`;

export default function ErrorComponent(props) {
  const { text } = props;
  return <ErrorMessage>{text}</ErrorMessage>;
}

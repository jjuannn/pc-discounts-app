import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-family: var(--bold-kanit);
  margin-bottom: 50px;
`;

export default function TitleComponent(props) {
  const { text } = props;
  return <Title>{text}</Title>;
}

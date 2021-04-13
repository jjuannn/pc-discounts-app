import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border: none;
  padding: 10px;
  font-family: var(--bold-kanit);
  color: black;
  background: var(--gray2);
  cursor: pointer;
  &:hover {
    color: white;
    background: black;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export default function ButtonComponent({
  text,
  disabled = null,
  onClick = () => {},
}) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
}

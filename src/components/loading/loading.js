import React from "react";
import styled from "@emotion/styled";

const Loader = styled.div`
border: 16px solid var(--gray2);
border-top: 16px solid black;
border-radius: 50%;
width: 120px;
height: 120px;
animation: spin 2s linear infinite;
margin: auto;
}

@keyframes spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export default function LoadingSpinner() {
  return <Loader />;
}

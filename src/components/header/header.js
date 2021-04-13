import React from "react";
import TopDivider from "../divider/top";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 3% 8%;
  justify-content: space-between;
  align-items: center;
  font-family: var(--bold-kanit);
  background: var(--gray2);
  @media screen and (min-width: 768px) {
    padding: 1% 8%;
  }
`;

const HeaderTitle = styled.p`
  width: fit-content;
  display: inline-block;
  font-size: 20px;
  & :first-child {
    text-decoration: none;
  }
`;

export default function HeaderComponent() {
  return (
    <>
      <Header>
        <HeaderTitle>
          <a href="/">Steam Discounts</a>
        </HeaderTitle>
      </Header>
      <TopDivider />
    </>
  );
}

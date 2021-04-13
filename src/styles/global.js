import { Global, css } from "@emotion/react";
import React from "react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --bold-kanit: "Kanit", sans-serif;
          --gray1: #f1f3f5;
          --gray2: #dee2e6;
        }
        * {
          margin: 0;
          padding: 0;
        }
        *::selection {
          color: white;
          background: black;
        }
        html {
          height: 100%;
        }
        body {
          display: flex;
          flex-direction: row;
          overflow-x: hidden;
          min-height: 100%;
          background: var(--gray1);
        }
        a:visited {
          color: black;
        }
      `}
    />
  );
}

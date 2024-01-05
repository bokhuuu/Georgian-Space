// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary:rgb(163, 191, 216);
    --secondary: rgb(100, 0, 123);
    --primary-text: rgb(17, 82, 139);
    --secondary-text:  rgb(17, 82, 139);
  }

  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
  }

  .nav-link.active {
    background-color: #ffffff;
    border-radius: 50%;
    width: fit-content;
  }

.btn {
  width: 107px;
  height: 40px;
  border-radius: 5%;
  background-color: rgba(23, 99, 165, 0.596);
  color: white;
  font-weight: bolder;
}

`;

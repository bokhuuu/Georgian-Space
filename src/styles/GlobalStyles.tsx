// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// global-styles
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary:lightblue;
    --secondary: rgb(124, 154, 182);
    --primary-text: rgb(17, 82, 139);
    --secondary-text:  rgb(17, 82, 139);
  }

  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }

  .nav-link.active {
    background-color: #ffffff;
    border-radius: 80%;
    width: fit-content;
  }
`;

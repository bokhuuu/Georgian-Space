// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary:rgb(163, 191, 216);
    --secondary: rgb(192, 198, 200);
    --primary-text: rgb(17, 82, 139);
    --secondary-text:  rgb(17, 82, 139);
  }

  body {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    overflow-x: hidden;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }

  .nav-link.active {
    background-color: #ffffff;
    border-radius: 10%;
    width: fit-content;
    height: fit-content;
  }

.btn {
  width: fit-content;
  height: fit-content;
  border-radius: 10%;
  background-color: rgba(23, 99, 165, 0.596);
  color: white;
  font-weight: bolder;
  cursor: pointer;
  
}

.icon-btn {
  width: 40px;
  height: 40px;
  background-color: "white";
  background-size: "cover";
  cursor: pointer;
}
`;

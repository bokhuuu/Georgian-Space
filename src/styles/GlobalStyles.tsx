// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary:rgba(163, 191, 216, 0.521);
    --secondary: rgba(40, 59, 84, 0.521);
    --primary-text: rgba(17, 82, 139, 0.623);
    --secondary-text:  rgb(102, 139, 17);
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
  width: 37px;
  height: 37px;
  background-color: "white";
  background-size: "cover";
  cursor: pointer;
}
`;

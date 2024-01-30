// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-background: rgba(163, 191, 216, 0.178);
    --dark-background:rgba(77, 99, 224, 0.788);
    --light-text:  #ffffff;
    --dark-text:  rgba(12, 33, 151, 0.616);
  }

  body {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.backgroundColor};
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

.modal-content, .sidebar, .sidebar-title, .sidebar-cards{
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
}

`;

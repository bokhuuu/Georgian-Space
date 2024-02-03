// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-background: rgb(176, 204, 226);
    --dark-background:rgb(110, 124, 201);
    --light-text:  #ffffff;
    --dark-text:  rgb(12, 33, 151);
  }

  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    overflow-x: hidden;
  }

  .nav-link.active {
    width: fit-content;
    height: fit-content;
    background-color: #ffffff;
    border-radius: 10%;
  }

.btn {
  width: fit-content;
  height: fit-content;
  background-color: rgba(23, 99, 165, 0.596);
  color: white;
  font-weight: bolder;
  border-radius: 10%;
  cursor: pointer;
  
}

.icon-btn {
  width: 37px;
  height: 37px;
  background-color: "white";
  background-size: "cover";
  cursor: pointer;
}

.modal-content, .sidebar, .sidebar-title, .sidebar-cards,.card{
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
}


`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-background: rgb(147, 179, 204);
    --dark-background:rgb(74, 89, 170);
    --light-text:  #ffffff;
    --dark-text:  rgb(12, 33, 151);
  }

  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Quicksand', sans-serif;
    font-family: 'Noto Sans Georgian', sans-serif;
    font-weight: 700;
    overflow-x: hidden;
  }

  .nav-link.active {
    width: fit-content;
    height: fit-content;
    border-top: #ffffff;
    border-bottom: #ffffff;
    border-radius: 10%;
  }

.btn {
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bolder;
  border-radius: 10%;
  width:80px;
  cursor: pointer;
  
}

.icon-btn {
  width: 37px;
  height: 37px;
  background-color: "white";
  background-size: "cover";
  cursor: pointer;
}

.header, .footer, .modal-content, .sidebar, .sidebar-title, .sidebar-cards,.custom-card, .dashboard-card,.profile-card{
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
}


`;

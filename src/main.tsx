// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// translation
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
// global styles
// import { GlobalStyles } from "./styles/global/GlobalStyles.tsx";
// // themes
// import { ThemeProvider } from "styled-components";
// import { themes } from "./styles/theme/themes.ts";
// import ThemeToggler from "./styles/theme/ThemeToggler.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

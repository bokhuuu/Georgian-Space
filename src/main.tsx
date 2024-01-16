import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "./configs/theme/themes.ts";
import useThemeStorage from "./hooks/useThemeStorage.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./configs/translation/i18n.ts";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import App from "./App.tsx";

const AppWrapper = () => {
  const { currentTheme } = useThemeStorage();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={themes[currentTheme]}>
          <I18nextProvider i18n={i18n}>
            <GlobalStyles />
            <App />
          </I18nextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppWrapper;

ReactDOM.createRoot(document.getElementById("root")!).render(<AppWrapper />);

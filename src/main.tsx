import ReactDOM from "react-dom/client";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useThemeLocalStorage from "./themes/useThemeLocalStorage.ts";
import { themes } from "./themes/ThemeSelector.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next/i18n.ts";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import App from "./App.tsx";

// const queryClient = new QueryClient();

const AppWrapper = () => {
  const { currentTheme } = useThemeLocalStorage();

  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={themes[currentTheme]}>
        <I18nextProvider i18n={i18n}>
          <GlobalStyles />
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
    // <ReactQueryDevtools />
    // </QueryClientProvider>
  );
};

export default AppWrapper;

ReactDOM.createRoot(document.getElementById("root")!).render(<AppWrapper />);

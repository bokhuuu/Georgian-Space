import { ThemeProvider } from "styled-components";
import ThemeToggler from "./styles/theme/ThemeToggler.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import { GlobalStyles } from "./styles/global/GlobalStyles.tsx";
import Header from "./components/header/Header.tsx";
import MainNav from "./components/nav/MainNav.tsx";
import AppRouting from "./routing/AppRouting.tsx";
import { themes } from "./styles/theme/themes.ts";

const App = () => {
  const { currentTheme } = ThemeToggler();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <Header />
        <MainNav />
        <AppRouting />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;

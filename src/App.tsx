// routing
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routing/AppRoute.tsx";
import MainNavigation from "./routing/main-nav/MainNav.tsx";
import { mainNavLinksList } from "./routing/main-nav/main-nav-links-list.ts";
// translation
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "./translation/i18n.ts";
import LanguageToggler from "./translation/LanguageToggler";
import { languageList } from "./translation/languageList";
// theme
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme/themes.ts";
import ThemeToggler from "./styles/theme/ThemeToggler.tsx";
// global styles
import { GlobalStyles } from "./styles/GlobalStyles.tsx";

const App = () => {
  const { t } = useTranslation();
  const { currentTheme, toogleTheme } = ThemeToggler();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <BrowserRouter>
          <header>
            <div> {t("header")}</div>
            <button onClick={toogleTheme}>Toggle Theme</button>
            <div>
              <LanguageToggler languageList={languageList} />
            </div>
          </header>
          <MainNavigation mainNavLinksList={mainNavLinksList} />
          <AppRoute />
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;

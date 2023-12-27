// navigation
import AppNavi from "./navigation/AppNavi.tsx";
import MainNavi from "./navigation/main-navi/MainNavi.tsx";
import { mainNaviLinkList } from "./navigation/main-navi/main-navi-link-list.ts";
// internationalization
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "./internationalization/i18n.ts";
import LanguageToggler from "./internationalization/LanguageToggler.tsx";
import { languageList } from "./internationalization/languageList.ts";
// styles
import { ThemeProvider } from "styled-components";
import { themes } from "./theme/themes.ts";
import ThemeToggler from "./theme/ThemeToggler.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";

const App = () => {
  const { t } = useTranslation();
  const { currentTheme, toggleTheme } = ThemeToggler();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <header>
          <div> {t("header")}</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <div>
            <LanguageToggler languageList={languageList} />
          </div>
        </header>

        <MainNavi mainNaviLinkList={mainNaviLinkList} />
        <AppNavi />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;

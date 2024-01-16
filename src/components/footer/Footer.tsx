import { useTranslation } from "react-i18next";
import LanguageToggler from "../../utils/LanguageToggler.tsx";
import { languageList } from "../../configs/translation/languageList.ts";
import ThemeToggler from "../../utils/ThemeToggler.tsx";
import ModalBox from "../modal/ModalBox.tsx";

const Footer = () => {
  const { t } = useTranslation();
  const { toggleTheme } = ThemeToggler();

  return (
    <footer className="container mt-3 mb-3">
      <div className="row" />

      <div className="header-icons d-flex align-items-center ms-4 mt-1">
        <button
          onClick={toggleTheme}
          style={{ borderRadius: "50%", marginLeft: 15 }}
        >
          tt
        </button>
        <LanguageToggler languageList={languageList} />
        {t("header")}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <ModalBox />
      </div>
    </footer>
  );
};

export default Footer;

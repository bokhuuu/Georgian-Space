import { useState, useEffect } from "react";
// routing
import { useLocation, useNavigate } from "react-router-dom";
// translation
import i18next from "i18next";
import { useTranslation } from "react-i18next";
//
import { useCookies } from "react-cookie";
// icon
import globeIcon from "../assets/icons/globe.svg";

interface Language {
  code: string;
  name: string;
  country_code: string;
  country_flag: string;
}

interface LanguageSwitcherProps {
  languageList: Language[];
}

const LanguageSwitcher = ({ languageList }: LanguageSwitcherProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["i18next"]);
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    cookies.i18next || i18next.language
  );
  const location = useLocation();

  useEffect(() => {
    setCookie("i18next", currentLanguage, { path: "/" });
    document.title = t("app_title");
  }, [currentLanguage, setCookie, t]);

  const handleLanguageChange = (code: string) => {
    i18next.changeLanguage(code);
    setCurrentLanguage(code);

    navigate(location, { replace: true });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={globeIcon} />
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item-text">{t("language")}</span>
            </li>
            {languageList.map(({ code, name, country_code, country_flag }) => (
              <li key={country_code}>
                <button
                  className={`dropdown-item ${
                    currentLanguage === code ? "disabled" : ""
                  }`}
                  onClick={() => handleLanguageChange(code)}
                >
                  <img
                    src={country_flag}
                    alt={name}
                    className="mx-2"
                    style={{
                      opacity: currentLanguage === code ? 0.5 : 1,
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import useLanguageCookie from "./useLanguageCookie";
import gbFlagIcon from "../assets/icons/gbFlagIcon.svg";
import geFlagIcon from "../assets/icons/geFlagIcon.svg";

const LanguageSelector = () => {
  const languageList = [
    {
      code: "en",
      flag: gbFlagIcon,
    },
    {
      code: "ge",
      flag: geFlagIcon,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { getLanguageFromCookie, setLanguageCookie } = useLanguageCookie();
  const [currentLanguage, setCurrentLanguage] = useState(
    getLanguageFromCookie() || i18next.language
  );

  useEffect(() => {
    setLanguageCookie(currentLanguage);

    document.title = t("app_title");
  }, [currentLanguage, setLanguageCookie, t]);

  const handleLanguageChange = useCallback(
    (code: string) => {
      i18next.changeLanguage(code);
      setCurrentLanguage(code);
      navigate(location, { replace: true });
    },
    [location, navigate]
  );

  return (
    <div className="container d-flex justify-content-end align-items-center">
      <div className="row">
        <div className="col">
          {languageList.map(({ code, flag }) => (
            <button
              key={code}
              className="icon-btn"
              style={{
                backgroundImage: `url(${flag})`,
                height: 30,
                borderRadius: "50%",
                opacity: currentLanguage === code ? 0.5 : 1,
              }}
              onClick={() => handleLanguageChange(code)}
              disabled={currentLanguage === code}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;

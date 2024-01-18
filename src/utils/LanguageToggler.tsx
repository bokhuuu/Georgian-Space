import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import useLanguageCookie from "../hooks/useLanguageCookie";
import gbFlagIcon from "../assets/icons/gbFlagIcon.svg";
import geFlagIcon from "../assets/icons/geFlagIcon.svg";

const LanguageToggler = () => {
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
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    getLanguageFromCookie() || i18next.language
  );

  useEffect(() => {
    setLanguageCookie(currentLanguage);

    document.title = t("app_title");
  }, [currentLanguage, setLanguageCookie, t]);

  const handleLanguageChange = (code: string) => {
    i18next.changeLanguage(code);
    setCurrentLanguage(code);

    navigate(location, { replace: true });
  };

  return (
    <div className="container">
      <div className="d-flex flex-row gap-1">
        {languageList.map(({ code, flag }) => (
          <button
            key={code}
            className="icon-btn"
            style={{
              backgroundImage: `url(${flag})`,
              height: 30,
              borderRadius: "50%",
            }}
            onClick={() => handleLanguageChange(code)}
            disabled={currentLanguage === code}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggler;

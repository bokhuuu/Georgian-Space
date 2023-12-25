import { useCookies } from "react-cookie";

const useLanguageCookie = () => {
  const [cookies, setCookie] = useCookies(["i18next"]);

  const getLanguageFromCookie = () => cookies.i18next;

  const setLanguageCookie = (language: string) => {
    setCookie("i18next", language, { path: "/" });
  };

  return { getLanguageFromCookie, setLanguageCookie };
};

export default useLanguageCookie;

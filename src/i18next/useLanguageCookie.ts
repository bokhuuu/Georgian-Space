import { useCallback } from "react";
import { useCookies } from "react-cookie";

const useLanguageCookie = () => {
  const [cookies, setCookie] = useCookies(["i18next"]);

  const getLanguageFromCookie = () => cookies.i18next;

  const setLanguageCookie = useCallback(
    (language: string) => {
      setCookie("i18next", language, { path: "/" });
    },
    [setCookie]
  );

  return { getLanguageFromCookie, setLanguageCookie };
};

export default useLanguageCookie;

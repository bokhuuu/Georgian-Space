import useLocalStorage from "use-local-storage";

const useLanguageLocalStorage = () => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage(
    "language",
    "en"
  );

  return {
    currentLanguage,
    setCurrentLanguage,
  };
};

export default useLanguageLocalStorage;

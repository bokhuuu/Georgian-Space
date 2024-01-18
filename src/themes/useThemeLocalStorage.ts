import useLocalStorage from "use-local-storage";

const useThemeLocalStorage = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    "light" || "dark"
  );

  return {
    currentTheme,
    setCurrentTheme,
  };
};

export default useThemeLocalStorage;

import useLocalStorage from "use-local-storage";

const useThemeStorage = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    "light" || "dark"
  );

  return {
    currentTheme,
    setCurrentTheme,
  };
};

export default useThemeStorage;

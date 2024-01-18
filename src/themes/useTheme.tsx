import useThemeLocalStorage from "./useThemeLocalStorage";

const useTheme = () => {
  const { currentTheme, setCurrentTheme } = useThemeLocalStorage();

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default useTheme;

// eslint-disable-next-line react-refresh/only-export-components
export const themes = {
  light: {
    backgroundColor: "var(--primary)",
    textColor: "var(--primary-text)",
  },
  dark: {
    backgroundColor: "pink",
    textColor: "green",
  },
};

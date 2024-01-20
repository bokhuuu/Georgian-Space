import useThemeLocalStorage from "./useThemeLocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const themes = {
  light: {
    backgroundColor: "var(--primary)",
    textColor: "var(--primary-text)",
  },
  dark: {
    backgroundColor: "var(--secondary)",
    textColor: "var(--secondary-text)",
  },
};

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme } = useThemeLocalStorage();

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default ThemeSelector;

import useThemeLocalStorage from "./useThemeLocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const themes = {
  light: {
    backgroundColor: "var(--light-background)",
    textColor: "var(--dark-text)",
  },
  dark: {
    backgroundColor: "var(--dark-background)",
    textColor: "var(--light-text)",
  },
};

const ThemeToggler = () => {
  const { currentTheme, setCurrentTheme } = useThemeLocalStorage();

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default ThemeToggler;

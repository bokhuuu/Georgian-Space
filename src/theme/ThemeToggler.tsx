import useThemeStorage from "./useThemeStorage";

const ThemeToggler = () => {
  const { currentTheme, setCurrentTheme } = useThemeStorage();

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default ThemeToggler;

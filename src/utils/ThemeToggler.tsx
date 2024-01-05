import useThemeStorage from "../hooks/useThemeStorage";

const useThemeToggler = () => {
  const { currentTheme, setCurrentTheme } = useThemeStorage();

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default useThemeToggler;

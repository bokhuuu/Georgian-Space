import useLocalStorage from "use-local-storage";

const ThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    "light" || "dark"
  );

  const toogleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toogleTheme,
  };
};

export default ThemeToggler;

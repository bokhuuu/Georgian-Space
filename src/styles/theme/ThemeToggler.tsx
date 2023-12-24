import { useState } from "react";

const ThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const toogleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    currentTheme,
    toogleTheme,
  };
};

export default ThemeToggler;

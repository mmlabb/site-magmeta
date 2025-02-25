"use client";

const { createContext, useState, useContext } = require("react");
import themeSwitch from "@/utils/theme";

// Valor inicial do contexto
const ThemeContext = createContext({
  darkMode: true,
  alternateTheme: null,
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const alternateTheme = () => {
    setDarkMode(!darkMode);
    themeSwitch(darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, alternateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

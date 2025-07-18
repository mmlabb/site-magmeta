"use client";

const { createContext, useState, useContext, useEffect } = require("react");
import themeSwitch from "@/utils/theme";
import { usePathname } from "next/navigation";

const ThemeContext = createContext({
  darkMode: false,
  alternateTheme: null,
});

export const ThemeProvider = ({ children }) => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const alternateTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    themeSwitch(darkMode);
  }, [darkMode, pathname]);

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

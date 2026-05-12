import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../lib/i18n";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    setLanguage(savedLanguage || "es");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    i18n.changeLanguage(language);
    window.localStorage.setItem("portfolio-language", language);
  }, [language, mounted]);

  const toggleTheme = () => {
    setDarkMode((currentValue) => !currentValue);
  };

  const toggleLanguage = () => {
    setLanguage((currentValue) => (currentValue === "es" ? "en" : "es"));
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        language,
        mounted,
        toggleTheme,
        toggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}

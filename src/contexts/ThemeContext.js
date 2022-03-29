import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const ThemeContext = createContext();

//localStorage
const defaultLocale = localStorage.getItem("Theme");

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultLocale);

    const values = {
        theme,
        setTheme,
    };

    useEffect(() => {
        localStorage.setItem("Theme", theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

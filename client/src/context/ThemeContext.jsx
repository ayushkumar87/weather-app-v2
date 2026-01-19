import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Enforce dark mode ("night") strictly
    const theme = "night";

    // disable functional setting (no-op)
    const setTheme = () => { };
    const toggleTheme = () => { };

    React.useEffect(() => {
        // Enforce night theme class on body
        document.body.className = ''; // clear others
        document.body.classList.add('theme-night');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

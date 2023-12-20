import React, { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const storeDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storeDarkMode);

  useEffect(() => {

    localStorage.setItem('darkMode', darkMode.toString());

  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};

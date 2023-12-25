import React, { createContext, useState } from "react";

export const ActiveModeContext = createContext();

export const ActiveModeProvider = ({ children }) => {

    const [activeLink, setActiveLink] = useState('');

  return (
    <ActiveModeContext.Provider value={[activeLink, setActiveLink]}>
      {children}
    </ActiveModeContext.Provider>
  );
};

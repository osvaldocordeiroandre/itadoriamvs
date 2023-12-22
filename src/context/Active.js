import React, { createContext, useState } from "react";

export const ActiveModeContext = createContext();

export const ActiveModeProvider = ({ children }) => {

    const [activeLink, setActiveLink] = useState('');
    const [show, setShow] = useState(true)

  return (
    <ActiveModeContext.Provider value={[activeLink, setActiveLink, show, setShow]}>
      {children}
    </ActiveModeContext.Provider>
  );
};

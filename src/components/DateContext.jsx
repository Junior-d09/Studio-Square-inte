"use client";
import { createContext, useContext, useState } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [dates, setDates] = useState([]); // ← plusieurs graduations au lieu d’une seule
  return (
    <DateContext.Provider value={{ dates, setDates }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);

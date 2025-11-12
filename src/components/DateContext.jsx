"use client";
import { createContext, useContext, useState } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [dates, setDates] = useState([]); 
  return (
    <DateContext.Provider value={{ dates, setDates }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);

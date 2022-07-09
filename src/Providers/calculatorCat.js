import { createContext, useState } from "react";
import dbCat from "../services/dbCat";

export const CalculatorCatContext = createContext();

export const CalculatorCatProvider = ({ children }) => {
  const [result, setResult] = useState(0);

  const calculationCat = (age) => {
    setResult(dbCat[age]);
    return result;
  };

  return (
    <CalculatorCatContext.Provider
      value={{ setResult, result, calculationCat }}
    >
      {children}
    </CalculatorCatContext.Provider>
  );
};

import { createContext, useState } from "react";
import dbDog from "../services/dbDog";

export const CalculatorDogContext = createContext();

export const CalculatorDogProvider = ({ children }) => {
  const [result, setResult] = useState(0);

  const calculationDog = (age, size) => {
    if (size === "mini") {
      for (let prop in dbDog.mini) {
        if (prop === age) {
          const humanAge = dbDog.mini[prop];
          setResult(humanAge);
        }
      }
    }

    if (size === "little") {
      for (let prop in dbDog.little) {
        if (prop === age) {
          const humanAge = dbDog.little[prop];
          setResult(humanAge);
        }
      }
    }

    if (size === "big") {
      for (let prop in dbDog.big) {
        if (prop === age) {
          const humanAge = dbDog.big[prop];
          setResult(humanAge);
        }
      }
    }

    if (size === "giant") {
      for (let prop in dbDog.giant) {
        if (prop === age) {
          const humanAge = dbDog.giant[prop];
          setResult(humanAge);
        }
      }
    }

    return result;
  };

  return (
    <CalculatorDogContext.Provider
      value={{ setResult, result, calculationDog }}
    >
      {children}
    </CalculatorDogContext.Provider>
  );
};

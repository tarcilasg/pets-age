import { CalculatorDogProvider } from "./calculatorDog";
import { CalculatorCatProvider } from "./calculatorCat";

const Providers = ({ children }) => {
  return (
    <CalculatorCatProvider>
      <CalculatorDogProvider>{children}</CalculatorDogProvider>
    </CalculatorCatProvider>
  );
};
export default Providers;

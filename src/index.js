import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);

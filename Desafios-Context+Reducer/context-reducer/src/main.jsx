import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BankContextProvider } from "./context/BankContex.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BankContextProvider>
      <App />
    </BankContextProvider>
  </StrictMode>,
);

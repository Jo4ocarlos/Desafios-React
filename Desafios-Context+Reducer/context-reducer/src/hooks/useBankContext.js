import { useContext } from "react";
import { BankContext } from "../context/BankContex";

export const useBankContext = () => {
  const context = useContext(BankContext);
  if (!context) {
    console.log("sem contexto");
  }
  return context;
};

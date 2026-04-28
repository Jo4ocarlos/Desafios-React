import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.log("sem contexto");
  }
  return context;
};
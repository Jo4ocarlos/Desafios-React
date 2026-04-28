import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CartReducer = (state, action) => {
  const productPrice = Number(action.value);
  switch (action.type) {
    case "ADICIONAR":
      return {
        ...state,
        totalValue: state.totalValue + productPrice,
        cartQTD: state.cartQTD + 1,
      };
    case "REMOVER":
      if (state.cartQTD === 0 || state.totalValue < productPrice) {
        return state;
      }

      return {
        ...state,
        totalValue: state.totalValue - productPrice,
        cartQTD: state.cartQTD - 1,
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    totalValue: 0,
    cartQTD: 0,
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

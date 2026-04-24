import { createContext, useReducer } from "react";

export const BankContext = createContext();

export const BankReducer = (state, action) => {
  switch (action.type) {
    case "DEPOSITAR":
      return { ...state, saldo: state.saldo + Number(action.dados) };

    case "SACAR":
      const valorSaque = Number(action.dados); // convertemos o que vem do cliente para number e atribuimos a uma variavel para utilizar em outras coisas dentro do bloco

      if (valorSaque > state.saldo) {
        alert(`Valor indisponivel, você tem R$${state.saldo} na conta`);
        return state
      }
      // toda lógica matematica deve ficar dentro do reducer
      return { ...state, saldo: state.saldo - valorSaque }; 

    default:
      return state;
  }
};

export const BankContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BankReducer, { saldo: 0 });

  return (
    <BankContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
};

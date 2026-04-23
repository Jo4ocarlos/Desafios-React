import { createContext,  useReducer } from "react";

export const BankContext = createContext()

export const BankReducer = (state, action)=>{

    switch(action.type){

        case 'DEPOSITAR':
            return {...state, saldo: action.dados};
        case 'SACAR':
            return {...state, saldo: action.dados};
        default:
            return state;
    }
}

export const BankContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(BankReducer, {saldo:'0'})

    return(
        <BankContext.Provider value={{...state, dispatch}}>
            {children}
        </BankContext.Provider>
    )
}
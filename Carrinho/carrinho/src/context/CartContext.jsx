import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CartReducer = (state, action)=>{
    switch(action.type){
        case "ADICIONAR":
            return {...state, productValue: state.productValue + Number(action.value), cartQTD: state.cartQTD + 1};
        default:
            return state;
    }
}

export const CartContextProvider = ({children}) => {
    const [state, dispach] = useReducer(CartReducer, {productValue:0, cartQTD:0})

    return(
        <CartContext.Provider value={{ ...state, dispach}}>
            {children}
        </CartContext.Provider>
    )
}
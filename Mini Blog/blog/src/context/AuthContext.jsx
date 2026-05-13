import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children, value})=>{

    return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuthValue = ()=>{
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error("useAuthValue precisa ser usado dentro de um AuthContextProvider!");
    }
    
    return context;
}

// essa função useAuthvalue é a mesma coisa de criar aquele hook do context para diminuir os imports
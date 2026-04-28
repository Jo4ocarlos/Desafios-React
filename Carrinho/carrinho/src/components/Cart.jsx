
import data from '../../data/db.json'
import { useCartContext } from "../hooks/useCartContext";
import { useState } from "react";

const Cart = ()=>{
    const {totalValue, cartQTD, dispatch} = useCartContext()


    const addToCart = (value)=>{
     
        dispatch({type: "ADICIONAR", value:value})
     
        
    }
    const remove = (value)=>{
        dispatch({type:"REMOVER", value:value})
        
    }
    return(
        <div>
            {data['products'].map((product)=>(
                <li key={product.id}>
                    {product.name} - R$: { product.price}
                <button onClick={()=> addToCart(product.price)}>comprar</button>
                <button onClick={()=> remove(product.price)}>remover do carrinho</button>
                </li>
            ))}
            <h1>{totalValue}</h1>
            <h2>{cartQTD}</h2>
            
        </div>
    )
}

export default Cart;
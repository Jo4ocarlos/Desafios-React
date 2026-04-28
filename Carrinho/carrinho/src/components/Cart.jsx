
import data from '../../data/db.json'
import { useCartContext } from "../hooks/useCartContext";
import { useState } from "react";

const Cart = ()=>{
    const {productValue, cartQTD, dispach} = useCartContext()
    console.log(data)
    return(
        <div>
            {data.map((product)=>(
                <li key={product.id}>
                    {product.name} - { product.price}
                <button>comprar</button>
                </li>
            ))}
            <h1>{productValue}</h1>
            <h2>{cartQTD}</h2>
        </div>
    )
}

export default Cart;
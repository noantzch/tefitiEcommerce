import React from 'react';
import { createContext, useState } from "react";

export const CartContext = createContext({});


const CartContextProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) =>{
        const flagRepeated = isInCart(productToAdd.id)
        if (flagRepeated){
            //me falta la logica para agregar el producto repetido
        } else{
            setProducts([...products, productToAdd]);
        }
    }

    const isInCart = (id) =>{
        return products.some(product => product.id === id);
    }
    //eliminar producto
    //vaciar todo el carrito
    //total precio
    //total productos
    return (
    <CartContext.Provider value={{products, addProduct}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider

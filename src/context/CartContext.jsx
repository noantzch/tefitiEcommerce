import React from 'react';
import { createContext, useState } from "react";

export const CartContext = createContext({});


const CartContextProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) =>{
        const flagRepeated = isInCart(productToAdd.id)
        if (flagRepeated){
            const repeated = products.find(
                (productInCart) => productInCart.id === productToAdd.id
                );
            repeated.quantity += productToAdd.quantity;
            const productsNoRepeated = products.filter(
                (productsInCart) =>     productsInCart.id !== productToAdd.id
                );
            setProducts([...productsNoRepeated, repeated])
        } else{
            setProducts([...products, productToAdd]);
        }
    }

    const isInCart = (id) =>{
        return products.some((product) => product.id === id);
    }
    //eliminar producto
    const removeProduct = (id) => {
        const productsCart = products.filter(
            (productsInCart) => productsInCart.id !== id
            );
        setProducts(productsCart);
    }
    //vaciar todo el carrito
    const emptyCart = () =>{
        setProducts([])
    }
     //total precio
    const calculateTotal = () =>{
        const total = products.reduce(
            (acc, productWatched) => 
                (acc += productWatched.quantity * productWatched.price), 
            0
            );
        return total
    }
    //total productos
    const totalItemsCart = () =>{
        let total = 0;
        products.forEach(
            (product) => (total += product.quantity)
            );
        return total 
    }
    return (
    <CartContext.Provider 
        value={{
            products, 
            addProduct,    
            removeProduct,
            emptyCart,
            calculateTotal, 
            totalItemsCart
        }}
    >
        {children}
    </CartContext.Provider>
    )
}


export default CartContextProvider

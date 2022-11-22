import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {products} = useContext(CartContext)
    return (
    products.length?
    <div>
        {products.map(product =>{
            return <CartItem item={product} key={product.id}></CartItem>
        })}
    </div>
    :
    <h2>No hay productos en el carrito</h2>
  )
}

export default CartContainer
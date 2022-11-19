import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {products} = useContext(CartContext)
  return (
    <div>
        {products.map(product =>{
            return <CartItem item={product}></CartItem>
        })}
    </div>
  )
}

export default CartContainer
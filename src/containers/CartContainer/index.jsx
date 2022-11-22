import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {products} = useContext(CartContext);
    const confirmPurchase = () =>{
        //mostrar form de compra AGREGAR YO 
        console.log("COMPRA")
    }
    return (
    products.length?
    <>
    <div>
        {products.map(product =>{
            return <CartItem item={product} key={product.id}></CartItem>
        })}
    </div>
    <button className='btn btn-success p-1' onClick={confirmPurchase}>Confirmar Compra</button>
    </>
    :
    <h2>No hay productos en el carrito</h2>
  )
}

export default CartContainer
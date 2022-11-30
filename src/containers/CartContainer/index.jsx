import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {

    const navigate = useNavigate();
    const navigateCheckout = () =>{
        navigate(`/checkout`)
    }

    const {products} = useContext(CartContext);

    

    return (
    products.length?
    <>
        <div>
            {products.map(product =>{
            return <CartItem item={product} key={product.id}></CartItem>
            })}
        </div>
        <button className='btn btn-success' onClick={navigateCheckout}>Continuar con la compra</button>
    </>
    :
    <h2>No hay productos en el carrito</h2>
    )
}

export default CartContainer
import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const CartContainer = () => {

    const navigate = useNavigate();
    const navigateCheckout = () =>{
        navigate(`/checkout`)
    }

    const {products} = useContext(CartContext);

    return (
    products.length?
    <>
        <div className='cart-container'>
            {products.map(product =>{
            return <CartItem item={product} key={product.id}></CartItem>
            })}
        </div>
        <button className='btn btn-secondary' onClick={navigateCheckout}>Continuar</button>
    </>
    :
    <h2>No hay productos en el carrito</h2>
    )
}

export default CartContainer
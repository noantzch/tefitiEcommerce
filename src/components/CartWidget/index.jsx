
import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Theme } from '../../context/Theme';
import './styles.scss';
/**
 * Icono de carrito con la cantidad de productos sleeccionados
 * @returns JSX del icono renderizado
 */
const CartWidget= () => {
    const navigate = useNavigate();
    const {darkmode} = useContext(Theme);
    const {totalItemsCart} = useContext(CartContext)
    return (
    <div className= {darkmode? 'logo-cart-dark' : 'logo-cart'} onClick={() => navigate("/cart")}>
        <AiOutlineShoppingCart /> <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})` } </span>
    </div>
    )
}

export default CartWidget

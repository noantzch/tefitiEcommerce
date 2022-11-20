
import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Theme } from '../../context/Theme';
import './styles.scss';

const CartWidget= () => {
    const {darkmode} = useContext(Theme)
    return (
    <div className= {darkmode? 'logo-cart-dark' : 'logo-cart'}>
        <AiOutlineShoppingCart />
    </div>
    )
}

export default CartWidget

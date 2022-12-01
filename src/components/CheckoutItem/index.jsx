import React, { useContext } from 'react';
import { Theme } from '../../context/Theme';
import './styles.scss'

const CheckoutItem = ({product}) => {
    const {darkmode} = useContext(Theme);
    return (
    <div className={darkmode? 'checkout-item-dark' : 'checkout-item' }>
        <img src={product.img} width={50} alt="img"/>
        <p>{product.name} </p>
        <p>( {product.quantity} )</p>
    </div>
    )
}

export default CheckoutItem
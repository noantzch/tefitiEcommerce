import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Theme } from '../../context/Theme';
import CheckoutItem from '../CheckoutItem';
import './styles.scss'

const CheckoutItemList = () => {
  const {darkmode} = useContext(Theme);
  const {products, calculateTotal} = useContext(CartContext);
    return (
        <div className={darkmode? 'checkout-list-dark' : 'checkout-list'}>
            {products.map(product =>{
                return <CheckoutItem product={product} key={product.id}/>
            }) }
            <p> Total: ${calculateTotal()}</p>
        </div>
    )
}

export default CheckoutItemList
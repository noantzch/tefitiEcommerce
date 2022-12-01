import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Theme } from '../../context/Theme';
import './styles.scss';

/**
 * Card del Item seleccionado en carrito
 * @param {Object} item Item como objeto para ser rederizado 
 * @returns JSX del item seleccionado para el carrito renderizado
 */

const CartItem = ({item}) => {
  const {darkmode} = useContext(Theme)
  const {removeProduct} = useContext(CartContext);
  const handleRemove = () => {
    removeProduct(item.id)
  }
  return (
    <div className={darkmode? 'cart-item-container-dark' :'cart-item-container' }>
        <img src={item.img} width={100} alt="img"/>
        <div className={darkmode? 'cart-item-detail-dark' : 'cart-item-detail'}>
        <h4>{item.name} </h4>
        <h6>( {item.quantity} )</h6>
        <button className='btn btn-danger' onClick={handleRemove}>Eliminar</button>
        </div>
    </div>
  )
}

export default CartItem
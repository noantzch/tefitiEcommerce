import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

/**
 * Card del Item seleccionado en carrito
 * @param {Object} item Item como objeto para ser rederizado 
 * @returns JSX del item seleccionado para el carrito renderizado
 */

const CartItem = ({item}) => {
  const {removeProduct} = useContext(CartContext);
  const handleRemove = () => {
    removeProduct(item.id)
  }
  return (
    <div>
        <img src={item.img} width={150} alt="img"/>
        <h2>{item.name} </h2>
        <h3>{item.quantity} </h3>
        <button className='btn btn-danger' onClick={handleRemove}>Eliminar</button>
    </div>
  )
}

export default CartItem
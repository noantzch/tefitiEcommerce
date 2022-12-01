import React, { useState } from 'react';
import './styles.scss';

/**
 * Botones para agregar productos al carrito
 * @param {function} onAdd función para agregar al carrito
 * @param {}initial cantidad inicial (1) de producto a agregar
 * @param {}stock stock del producto
 * @returns JSX de los botones renderizados y funcionales
 */

const ItemCount = ({onAdd, initial, stock}) => {

    const [count, setCount] = useState(initial);

    const onPlus = () =>{
        if(count < stock) setCount(count +1)
    }

    const onDecrement = () =>{
        if(count > initial) setCount(count -1)
    }
  return (
    <div className='count-container'>
      <div>
        <button className='btn btn-danger' onClick={onDecrement}>-</button>
        <span id='count'> {count} </span>
        <button className='btn btn-success'onClick={onPlus}>+</button>
      </div>
      <div>
        <button className='btn btn-secondary' onClick={() => onAdd(count)} >Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
import React, { useState } from 'react';
import './styles.scss';

const ItemCount = ({onAdd, initial, stock}) => {

    const [count, setCount] = useState(initial);

    const onPlus = () =>{
        if(count < stock) setCount(count +1)
    }

    const onDecrement = () =>{
        if(count > initial) setCount(count -1)
    }
  return (
    <div>
        <button className='btn btn-danger' onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button className='btn 'onClick={onPlus}>+</button>
        <button className='btn' onClick={() => onAdd(count)} >Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
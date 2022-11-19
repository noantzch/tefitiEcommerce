import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <img src={item.img} width={150} alt="img"/>
        <h2>{item.name} </h2>
    </div>
  )
}

export default CartItem
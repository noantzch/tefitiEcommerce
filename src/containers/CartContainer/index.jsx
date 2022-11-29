import React, { useContext, useState } from 'react'
import CartItem from '../../components/CartItem'
import FormPurchase from '../../components/FormPurchase';
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {products} = useContext(CartContext);
    const [formShow, setFormShow] = useState(false)

    const showFormPurchase = () =>{
        setFormShow(true)
    }
    return (
    products.length?
    <>
        <div>
            {products.map(product =>{
            return <CartItem item={product} key={product.id}></CartItem>
            })}
        </div>
        {formShow ? 
        null :
        <button className='btn btn-success p-1' onClick={showFormPurchase}>Confirmar Compra</button>
        }
        {formShow? <FormPurchase /> : null}
        </>
    :
    <h2>No hay productos en el carrito</h2>
    )
}

export default CartContainer
import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { Formik, Field, Form } from 'formik';
import { CartContext } from '../../context/CartContext';
import { saveOrder } from '../../services/saveOrder';

const CartContainer = () => {
    const {products, calculateTotal} = useContext(CartContext);
    let buyer;

    const confirmPurchase = () =>{
        (async () => { 
            await saveOrder(
                buyer.name,
                buyer.email,
                buyer.telf,
                products,
                calculateTotal()
            )
        })()
    } 

    return (
    products.length?
    <>
        <div>
            {products.map(product =>{
            return <CartItem item={product} key={product.id}></CartItem>
            })}
        </div>

        <Formik
            initialValues={{
                name: '',
                email: '',
                telf: '',
            }}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                buyer = values;
                setTimeout( confirmPurchase(), 501)
            }}
        >
            <Form>
                <label htmlFor="name">Nombre Completo</label>
                <Field id="name" name="name" placeholder="Nombre Completo" />

                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="correo@email.com" type="email" />

                <label htmlFor="telf">Teléfono</label>
                <Field id="telf" name="telf" placeholder="123456789"/>

                <button type="submit">Confirmar Compra</button>
            </Form>
        </Formik>

        {/* <button className='btn btn-success p-1' onClick={confirmPurchase}>Confirmar Compra</button> */}
    </>
    :
    <h2>No hay productos en el carrito</h2>
    )
}

export default CartContainer
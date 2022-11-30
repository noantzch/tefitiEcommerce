import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { CartContext } from '../../context/CartContext';
import { saveOrder } from '../../services/saveOrder';
import { useNavigate } from 'react-router-dom';

const CheckoutContainer = () => {
    const {products, calculateTotal} = useContext(CartContext);
    let buyer;
    const navigate = useNavigate();
    const navigateItemList = () =>{
        navigate(`/`)
    }
    const {emptyCart} = useContext(CartContext);
    const confirmPurchase = () =>{
        (async () => { 
            await saveOrder(
                buyer.name,
                buyer.email,
                buyer.telf,
                products,
                calculateTotal()
            );
            emptyCart();
            navigateItemList();
        })();
    }

    return (
    <div>
        <Formik
            initialValues={{
                name: '',
                email: '',
                telf: '',
            }}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                buyer = values;
                setTimeout( confirmPurchase(), 501);
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
    </div>
    )
}

export default CheckoutContainer
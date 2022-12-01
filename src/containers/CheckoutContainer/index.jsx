import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { CartContext } from '../../context/CartContext';
import { saveOrder } from '../../services/saveOrder';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import CheckoutItemList from '../../components/CheckoutItemList';
import { Theme } from '../../context/Theme';

const CheckoutContainer = () => {
    const {products, calculateTotal} = useContext(CartContext);
    const {darkmode} = useContext(Theme);
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
    <div className='checkout-container'>
        <Formik
            initialValues={{
                name: '',
                email: '',
                telf: '',
            }}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                buyer = values;
                setTimeout( confirmPurchase(), 0);
            }}
        >
            <Form className={darkmode? 'formik-form-dark' : 'formik-form'}>
                <label htmlFor="name" className='labels'>Nombre Completo</label>
                <Field id="name" name="name" placeholder="Nombre Completo" required />

                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="correo@email.com" type="email" required />

                <label htmlFor="telf">Teléfono</label>
                <Field id="telf" name="telf" placeholder="123456789" required/>

                <button type="submit" className='btn btn-secondary'>Confirmar Compra</button>
            </Form>
        </Formik>
        <CheckoutItemList/>
    </div>
    )
}

export default CheckoutContainer
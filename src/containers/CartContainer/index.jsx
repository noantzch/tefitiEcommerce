import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { Formik, Field, Form } from 'formik';
import { CartContext } from '../../context/CartContext';
import generateOrderObject from '../../services/generateOrderObject';
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';

const CartContainer = () => {
    const {products, calculateTotal} = useContext(CartContext);
    let buyer;

    const confirmPurchase = () =>{

        (async () => { 
            const generatedOrder = generateOrderObject(
                                                        buyer.name,
                                                        buyer.email,
                                                        buyer.telf,
                                                        products,
                                                        calculateTotal());
            
            let productOutOfStock = [];
            for (const productInCart of products){
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                const productInFirebase = {...docSnap.data(), id: doc.id};
                if (productInCart.quantity > productInFirebase.stock) productOutOfStock.push(productInCart)
            }

            if(productOutOfStock.length === 0){

                for (const productInCart of products){
                    const productRef = doc(db, "products", productInCart.id);
    
                    const docSnap = await getDoc(productRef);
                    const productInFirebase = {...docSnap.data(), id: doc.id};
    
                    await updateDoc(productRef, {
                        stock: productInFirebase.stock - productInCart.quantity
                    })
                }

                    try{ 
                        const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                        alert(`Se generó la orden correctamente con ID: ${docRef.id}`)
                    }catch (error){
                        console.log(error)
                    }
            }
            else{
                alert("Algún producto está fuera de stock")
            }
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
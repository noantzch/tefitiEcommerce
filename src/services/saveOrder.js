import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/config";
import generateOrderObject from "./generateOrderObject";

export const saveOrder = async (nombre, email, telf, products, total) => {
    try{
        const generatedOrder = generateOrderObject(
                                                    nombre,
                                                    email,
                                                    telf,
                                                    products,
                                                    total);
        
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
    } catch (error){
        console.log(error)
    }
}
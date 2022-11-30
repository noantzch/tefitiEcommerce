import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { Spinner } from "../../components/Spinner";


export default function ItemDetailContainer(){

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{

        const getProductDetail = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({...docSnap.data(), id: docSnap.id})
            } else {
            console.log("No such document!");
            }
        }
        getProductDetail();
    }, [id])
    return (
        (product ? <ItemDetail product={product}/> : <Spinner /> )
        )
}
import React from 'react';
import ItemList from '../../components/ItemList';
import './styles.scss';
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../../Firebase/config';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Spinner } from '../../components/Spinner';
export default function ItemListContainer () {

    const [products, setProducts] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(()=> {
        ( async ()=> {
            try {
                let q;
                if(categoryId){
                    q = query(collection(db, "products"), where("type", "==", categoryId));
                } else{
                    q = query(collection(db, "products"));  
                } 
                const querySnapshot = await getDocs(q);
                const productsFirebase = [];
                querySnapshot.forEach((doc) => {
                    productsFirebase.push({...doc.data(), id: doc.id})
                });
                setProducts(productsFirebase)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    return (
            products.length > 1 ?
            (categoryId ? <ItemList products={products} /> : <> <Header /> <ItemList products={products} /> </>)
            :
            <Spinner />
    )
}
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../Firebase/config'

const useFirebase = (categoryId) => {

    const [data, setData] = useState ([])

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
                setData(productsFirebase)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    return [data]
}

export default useFirebase
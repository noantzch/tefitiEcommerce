import React from 'react';
import ItemList from '../../components/ItemList';
import './styles.scss';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Spinner } from '../../components/Spinner';
import useFirebase from '../../hooks/useFirebase';

export default function ItemListContainer () {

    const {categoryId} = useParams();

    const [data] = useFirebase(categoryId);

    return (
            data.length > 0 ?
            (categoryId ? <ItemList products={data} /> : <> <Header /> <ItemList products={data} /> </>)
            :
            <Spinner />
    )
}
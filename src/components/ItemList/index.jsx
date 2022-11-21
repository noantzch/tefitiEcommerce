import React, { useContext } from 'react';
import { Theme } from '../../context/Theme';
import Item from '../Item';
import './styles.scss';

const ItemList = ({products}) => {
    const {darkmode} = useContext(Theme);
    return (
        <div className= {darkmode? 'item-list-container-dark' : 'item-list-container'}>

            {products.map(product =>{
                return <Item product={product} key={product.id}/>
            }) }

        </div>
    )
}

export default ItemList
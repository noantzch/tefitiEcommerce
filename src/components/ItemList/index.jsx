import React from 'react';
import Item from '../Item';
import './styles.scss';

const ItemList = ({products}) => {

    return (
        <div className='item-list-container'>

            {products.map(product =>{
                return <Item product={product} key={product.id}/>
            }) }

        </div>
    )
}

export default ItemList
import React, { useContext } from 'react';
import { Theme } from '../../context/Theme';
import Item from '../Item';
import './styles.scss';

/**
 * Map de los productos a mostrar
 * @param {Object} products arreglo de productos
 * @returns JSX de cada producto (item) para ser usado en Item
 */

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
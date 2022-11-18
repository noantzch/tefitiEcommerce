import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import './styles.scss';

export default function ItemDetail({product}){

    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const addToCart = (quantity) => {
        console.log(quantity);
        setQuantityItemDetail(quantity);
    };

    return(
    <div className="detail">
        <img className="img-detail" src={product.img} alt="imagen de producto"></img>
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h5>Precio: ${product.price}</h5>
            {quantityItemDetail ?
            <Link to="/cart"> <button className="btn btn-dark">Ir al carrito</button> </Link> 
            : 
            <ItemCount onAdd={addToCart} initial={1} stock={product.stock} />}
        </div>
    </div>
    )
}
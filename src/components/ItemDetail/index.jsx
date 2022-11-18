import React from "react";
import './styles.scss';

export default function ItemDetail({product}){
    return(
    <div className="detail">
        <img className="img-detail" src={product.img} alt="imagen de producto"></img>
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h5>Precio: ${product.price}</h5>
            <button>AGREGAR</button>
        </div>
    </div>
    )
}
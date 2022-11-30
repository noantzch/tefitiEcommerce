import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import './styles.scss';

/**
 * Navegacion a detalles del producto
 * @param {Object} product Detalles del producto
 * @returns JSX del producto detallado renderizado y con botones para agregar
 */

export default function ItemDetail({product}){

    const {addProduct} = useContext(CartContext);

    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const addToCart = (quantity) => {
        addProduct({...product, quantity})
        setQuantityItemDetail(quantity);
    };
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/cart')
    }

    return(
    <div className="detail">
        <img className="img-detail" src={product.img} alt={product.name}></img>
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h5>Precio: ${product.price}</h5>
            {quantityItemDetail ?
            <button className="btn btn-dark" onClick={handleNavigate}>Ir al carrito</button>
            : 
            <ItemCount onAdd={addToCart} initial={1} stock={product.stock} />}
        </div>
    </div>
    )
}
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const Item = ({product}) => {
    const navigate = useNavigate();
    const navigateDetail = () =>{
        navigate(`/detail/${product.id}`)
    }
    return (
            <div className="card">
                <div className="card-body" onClick={navigateDetail}>
                <img src={product.img} className="card-img-top" alt="producto"></img>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Precio: ${product.price}</p>
                </div>
                    <Link to="/" className="btn btn-primary">Agregar</Link>
            </div>
    )
}

export default Item
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Theme } from '../../context/Theme';
import './styles.scss';

const Item = ({product}) => {
    const navigate = useNavigate();
    const navigateDetail = () =>{
        navigate(`/detail/${product.id}`)
    }
    const {darkmode} = useContext(Theme)
    return (
            <div className={darkmode ? " card card-dark" : "card"} onClick={navigateDetail}>
                <Link className="card-body">
                    <img src={product.img} className="card-img-top" alt="producto"></img>
                    <h5 className={darkmode ? "card-title-dark" : "card-title"}>{product.name}</h5>
                    <p className={darkmode ? "card-text-dark" : "card-text"}>Precio: ${product.price}</p>
                </Link>
            </div>
    )
}

export default Item
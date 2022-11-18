import React from "react";
import { Link } from "react-router-dom";
import './styles.scss';

export default function Bookmarks () {

    return(
        <div id="bookmarks-bar">
            <Link className="bookmarks" to="/category/Sahumerios">SAHUMERIOS </Link>
            <Link className="bookmarks" to="/category/Facial">CUIDADO FACIAL </Link>
            <Link className="bookmarks" to="/category/Corporal">CUIDADO CORPORAL </Link>
            <Link className="bookmarks" to="/category/Dental">CUIDADO DENTAL </Link>
            <Link className="bookmarks" to="/">AROMATERAPIA</Link>  
            <Link className="bookmarks" to="/">HOGAR</Link>           
        </div>
    )
}
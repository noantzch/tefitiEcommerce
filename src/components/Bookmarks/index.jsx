import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../context/Theme";
import './styles.scss';

export default function Bookmarks () {
    const {darkmode} = useContext(Theme);
    return(
        <div className= {darkmode ? "bookmarks-bar-dark" : "bookmarks-bar"}>
            <Link className="bookmarks" to="/category/Sahumerios">SAHUMERIOS </Link>
            <Link className="bookmarks" to="/category/Facial">CUIDADO FACIAL </Link>
            <Link className="bookmarks" to="/category/Corporal">CUIDADO CORPORAL </Link>
            <Link className="bookmarks" to="/category/Dental">CUIDADO DENTAL </Link>
            <Link className="bookmarks" to="/category/Aromaterapia" >AROMATERAPIA</Link>  
            <Link className="bookmarks" to="/category/Hogar">HOGAR</Link>           
        </div>
    )
}
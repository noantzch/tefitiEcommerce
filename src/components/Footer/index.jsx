import React from "react";
import './styles.scss';
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

/**
 * Footer
 * @returns JSX del footer renderizado
 */

export default function Footer(){
    return(
        <footer>
            <div className="foot-tefiti">
            <p>
                TEFITI NATURAL 2022 (C)
                <br></br>
                Siguenos en nuestras redes sociales
                <br></br>
                <a href="https://www.facebook.com/tefitinatural" className="redes" target= "_blank" rel="noreferrer"><BsFacebook  /> </a>  
                <a href="https://www.instagram.com/tefitinatural/" className="redes" target= "_blank" rel="noreferrer"> <BsInstagram /> </a>
                <a href="https://wa.me/c/5493875925757" className="redes" target= "_blank" rel="noreferrer"> <BsWhatsapp />  </a>    
            </p>
            </div>

            <div id="dev">
                <p>
                Desarrollado por Luis Noel Antezana
                </p>
            
            </div>
        </footer>
    )

}
import React from "react";
import './styles.scss'

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
                Siguenos en nuestras redes
                <br></br>
                l o g o s
            </p>
            </div>

            <div id="dev">
                <p>
                Desarrollado por Luis Noel Antezana
                <br></br>
                l o g o s 
                </p>
            
            </div>
        </footer>
    )

}
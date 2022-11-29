import React from 'react'

const FormPurchase = () => {
    return (
    <div>
        <form>
            <div>
                <label>Nombre Completo</label>
                <input type="text" name="nombre" placeholder="Escribe tu nombre" required=""></input>
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="Escribe tu mail" required=""></input>
            </div>

            <div>
                <label>Teléfono</label>
                <input type="number" name="telefono"  placeholder="Escribe tu teléfono"></input>
            </div>
        </form>
    </div>
    )
}

export default FormPurchase
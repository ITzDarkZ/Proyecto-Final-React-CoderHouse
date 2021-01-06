import React from 'react'

const Item = ({titulo, precio, mercadopago}) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <h4>{precio}</h4>
            <p>Acepta mercadopago?</p>
            <p>{mercadopago ? "Si!" : "No!"}</p>
        </div>
    )
}

export default Item

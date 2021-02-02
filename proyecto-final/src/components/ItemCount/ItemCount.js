import React, {useState} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const ItemCount = ({stock, onAdd, endBuy}) => {
    const [contador, setContador] = useState(1)

    const aumentarContador = (stock) => {
        if(!endBuy){
            if (stock !== 0){
                if (contador < stock) {
                    setContador(contador + 1)
                }
            }
        }
    }

    const disminuirContador = () => {
        if (!endBuy){
            if (contador > 1){
                setContador(contador - 1)
            }
        }
       
    }
    return (
        <>
            <p>{contador}</p>
            <ButtonGroup aria-label="ItemCounter">
                <Button variant="dark" onClick={() => {aumentarContador(stock)}}> + </Button>
                {endBuy ? <Button variant="dark"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/cart'> Terminar compra </Link></Button> : <Button variant="dark" onClick={() => {onAdd(stock, contador)}}> Añadir al carrito </Button>}
                <Button variant="dark" onClick={disminuirContador}> - </Button>
            </ButtonGroup>
        </>
    )
}

export default ItemCount

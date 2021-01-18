import React, {useState} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

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
            <p style={{paddingLeft: '100px'}}>{contador}</p>
            <ButtonGroup aria-label="ItemCounter">
                <Button variant="dark" onClick={() => {aumentarContador(stock)}}> + </Button>
                {endBuy ? <Button variant="dark" href="/cart"> Terminar compra </Button> : <Button variant="dark" onClick={() => {onAdd(stock, contador)}}> Añadir al carrito </Button>}
                <Button variant="dark" onClick={disminuirContador}> - </Button>
            </ButtonGroup>
        </>
    )
}

export default ItemCount

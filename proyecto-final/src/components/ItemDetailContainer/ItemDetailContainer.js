import React, {useContext} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = ({context}) => {
    const parametros = useParams()
    const productos = useContext(context).Productos
    const addItem = useContext(context).addItem

    return (
        <>
            {productos.length > 0 ? <ItemDetail items={productos} id={parametros.id} addItem={addItem} /> : 'Cargando...'}
        </>
    )
}

export default ItemDetailContainer

import React, {useContext} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'


const ItemDetailContainer = ({context}) => {
    const parametros = useParams()
    const productos = useContext(context).Productos
    const addItem = useContext(context).addItem

    return (
        <>
            {productos.length > 0 ? 
                            <ItemDetail items={productos} id={parametros.id} addItem={addItem} />
                            :
                            <div style={{margin: '0 auto', alignItems: 'center', textAlign: 'center', padding: '20rem'}}>
                                <Spinner animation="border" role="status">
                                    <span style={{color: 'black'}} className="sr-only">Cargando productos</span>
                                </Spinner>
                            </div>}
        </>
    )
}

export default ItemDetailContainer

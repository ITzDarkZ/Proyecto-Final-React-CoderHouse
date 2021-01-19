import React, {useContext} from 'react'
import Item from './Item/Item'

const ItemList = ({categoria, context}) => {

    const productos = useContext(context).Productos

    return (
        <div className="lista-productos">
                {productos.length > 0 ?
                productos.map((elemento)=>{
                    return (
                        <Item key={elemento.id}
                              titulo={elemento.title} 
                              precio={elemento.price} 
                              mercadopago={elemento.accepts_mercadopago} 
                              imagen={elemento.thumbnail} 
                              id={elemento.id}></Item>
                    )
                })
                :
                <p>Cargando, por favor espere...</p>
                }
        </div>
    )
}

export default ItemList

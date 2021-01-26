import React, {useContext, useState} from 'react'
import Item from './Item/Item'

const ItemList = ({categoria, context}) => {
    const productos = useContext(context).Productos
    const [filtrados, setFiltrados] = useState([])
    if(!isNaN(categoria)){
        if (filtrados.length === 0){
            const temp = productos.filter(x => x.categoryId === categoria)
            setFiltrados(temp)
        } 
    }

    return (
        <div className="lista-productos">
                { filtrados.length > 0 ?
                        filtrados.map((elemento)=>{
                        return (
                            <Item key={elemento.id}
                                titulo={elemento.title} 
                                precio={elemento.price} 
                                mercadopago={elemento.accepts_mercadopago} 
                                imagen={elemento.thumbnail} 
                                id={elemento.id}></Item>
                            )
                        })
                        : productos.length > 0 ?
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

/*
productos.length > 0 ?
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
*/
import React, { useEffect, useState } from 'react'
import Item from './Item/Item'

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1168")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setProductos(res.results)
        })
    },[])

    return (
        <div className="lista-productos">
                {productos.length > 0 ?
                productos.map((elemento)=>{
                    return (
                        <Item key={elemento.id} titulo={elemento.title} precio={elemento.price} mercadopago={elemento.accepts_mercadopago} imagen={elemento.thumbnail}></Item>
                    )
                })
                :
                <p>Cargando, por favor espere...</p>
                }
        </div>
    )
}

export default ItemList

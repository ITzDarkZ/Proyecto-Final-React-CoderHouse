import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const parametros = useParams()

    const [productos, setProductos] = useState([])
    const [cargo, setCargo] = useState(false)

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA3025')
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                setProductos(res.results)
                setCargo(true)
            })
    },[])
    return (
        <>
            {cargo ? <ItemDetail items={productos} id={parametros.id}/> : 'Cargando...'}
        </>
    )
}

export default ItemDetailContainer

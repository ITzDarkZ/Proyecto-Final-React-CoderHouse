import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [cargo, setCargo] = useState(false)

    useEffect(()=>{
        setInterval(()=>{
            setCargo(true)
        }, 3000)
    },[])

    return (
        <>
            {cargo ? <ItemDetail/> : 'Cargando...'}
        </>
    )
}

export default ItemDetailContainer

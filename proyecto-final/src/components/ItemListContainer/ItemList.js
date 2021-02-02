import React, {useContext} from 'react'
import Item from './Item/Item'
import Spinner from 'react-bootstrap/Spinner'
const ItemList = ({categoria, context}) => {
    const buscarCategoria = useContext(context).buscarCategoria
    const productos = useContext(context).Productos
    const filtrados = useContext(context).Categoria

    if(!isNaN(categoria)){
        buscarCategoria(categoria)
    }

    return (
        <div>
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
                            <div style={{margin: '0 auto', alignItems: 'center', textAlign: 'center', padding: '20rem'}}>
                                <Spinner animation="border" role="status">
                                    <span style={{color: 'black'}} className="sr-only">Cargando productos</span>
                                </Spinner>
                            </div>
                }
        </div>
    )
}

export default ItemList
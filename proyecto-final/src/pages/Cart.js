import React, {useContext} from 'react'
import {contextCart} from '../components/CartContext/CartContext'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import swal from 'sweetalert'

const Cart = () => {
    const cart = useContext(contextCart).Cart
    const removeItem = useContext(contextCart).removeItem

    const eliminarProd = (id) => {
        swal({
            title: "¿Estas seguro?",
            text: "¿Quieres borrar este item del carrito?",
            icon: "warning",
            buttons: ['Cancelar', 'Borrar'],
            dangerMode: true,
          })
          .then((borrar) => {
            if (borrar) {
              swal("El producto fue borrado correctamente", {
                icon: "success",
                buttons: false
              });
              removeItem(id)
            }
          });
    }

    const checkOutConfirm = () => {
        swal({
            title: "Gracias por confiar en nosotros!",
            text: "Te enviamos a la pagina de checkout!",
            icon: "success",
            button: false,
          });
    }

    return (
        <>
            {cart.length > 0 ?
                <div>
                {cart.map((prod) => {
                    
                    return(
                            <div key={prod.item.id} style={{padding: '3rem 1rem 1rem 5.5rem', float: 'left'}}>
                                <Card style={{ width: '16rem'}}>
                                    <Card.Img style={{maxHeight: '90px', maxWidth:'90px', display: 'block', margin:'0 auto'}} variant="top" src={prod.item.thumbnail} />
                                    <Card.Body>
                                    <Card.Title style={{height: '130px'}}>{prod.item.title}</Card.Title>
                                    <Card.Text><small>{prod.item.descripcion}</small></Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{margin: '0 auto', textAlign: 'center'}}>
                                        <small>
                                            <p>Precio: ${prod.item.price * prod.cantidad}</p>
                                            <p>Cantidad: {prod.cantidad}</p>
                                        </small>
                                        <Button variant='dark' onClick={()=>{eliminarProd(prod.item.id)}}>Eliminar Producto</Button>
                                    </Card.Footer>
                                </Card>
                            </div> 
                    )
                })}
                <Button variant="dark" onClick={checkOutConfirm} size="lg" block><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/checkout'>Finalizar compra</Link></Button>
                </div>
            :
            <Jumbotron fluid style={{background: 'white', width: '98vw', height: '88vh'}}>
                <div style={{margin:'0 auto', textAlign: 'center', padding: '10rem'}}>
                    <h1>Tu carrito esta vacio!</h1>
                    <p>Ve a la tienda a comprar algo!</p>
                    <p>
                        <Button variant="dark" href='/'>Tienda</Button>
                    </p>
                </div>
            </Jumbotron>
            }
        </>
    )
}

export default Cart

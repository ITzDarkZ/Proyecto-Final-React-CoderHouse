import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCount from '../ItemCount/ItemCount'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

const ItemDetail = ({items, id, addItem}) => {
    const producto = items.find(x => x.id === id)
    
    const [compra, setCompra] = useState(false)

    const onAdd = (stock, cant) =>{
        if(stock !== 0){
            swal({
                title: "Estas seguro?",
                text: `Estas seguro de que quieres agregar ${cant} unidades de este producto al carrito?`,
                icon: "warning",
                buttons: true,
              }).then((agregar) => {
                if (agregar) {
                    setCompra(true)
                    if(addItem(producto, cant)){
                        swal("Este producto fue agregado al carrito!", {
                            icon: "success",
                        });
                    } else {
                        swal({
                            title: "Ya tienes este producto en el carrito!",
                            text: "Puedes ir al carrito para finalizar la compra",
                            icon: "error",
                            buttons: false
                        });
                    }
                }
              });
        } else {
            swal({
                    title: "No hay stock!",
                    text: "No hay stock disponible para este producto",
                    icon: "error",
                    buttons: false
                });
        }
    }

    return (
        <>
        {producto ? 
            <div style={{margin: '0 auto', textAlign: 'center', padding: '10rem'}}>
                <Container>
                    <Row>
                        <Col md='6'>
                            <img className="image-responsive"
                                src={producto.image}
                                alt={producto.title}
                            />
                        </Col>
                        <Col md='6'>
                            <Row>
                                <Col md='12'><h1>{producto.title}</h1></Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <p>{producto.descripcion}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col><h2>Precio: ${producto.price}</h2></Col>
                            </Row>
                            <Row>
                                <Col><ItemCount stock={producto.stock} onAdd={onAdd} endBuy={compra}/></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        :
            <Jumbotron fluid style={{background: 'white', width: '98vw', height: '88vh'}}>
                <div style={{margin:'0 auto', textAlign: 'center', padding: '10rem'}}>
                    <h1>No se encontro este producto!</h1>
                    <p>Puede volver al inicio con este boton</p>
                    <p>
                        <Button variant="dark"><Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Inicio</Link></Button>
                    </p>
                </div>
            </Jumbotron>
        }
        </>
    )
}

export default ItemDetail

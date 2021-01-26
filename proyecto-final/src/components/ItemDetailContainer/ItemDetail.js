import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCount from '../ItemCount/ItemCount'
import swal from 'sweetalert';
import './style.css'

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
        <div className='mainDiv'>
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
    )
}

export default ItemDetail

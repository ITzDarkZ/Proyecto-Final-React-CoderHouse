import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCount from '../ItemCount/ItemCount'
import swal from 'sweetalert';

const ItemDetail = ({items, id}) => {
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
                    swal("Este producto fue agregado al carrito!", {
                        icon: "success",
                    });
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
            <Container fluid>
                <Row>
                    <Col md='6'>
                        <img
                            width={240}
                            height={240}
                            className="image-responsive"
                            src={producto.thumbnail}
                            alt={producto.title}
                        />
                    </Col>
                    <Col md='6'>
                        <Row>
                            <Col md='12'><h1>{producto.title}</h1></Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <p>Descripcion del producto</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col><h2>${producto.price}</h2></Col>
                        </Row>
                        <Row>
                            <Col><ItemCount stock={producto.available_quantity} onAdd={onAdd} endBuy={compra}/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default ItemDetail

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemDetail = ({items, id}) => {
    const producto = items.find(x => x.id === id)

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
                    </Col>
                </Row>
            </Container>
    )
}

export default ItemDetail

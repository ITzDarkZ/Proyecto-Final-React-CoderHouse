import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'

const ItemDetail = () => {
    return (
        <Container fluid='lg'>
            <h1 style={{textAlign: 'center'}}>Detalle del producto</h1>
            <Media>
            <img
                width={90}
                height={90}
                className="mr-3"
                src="https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad-2.jpg"
                alt="Product"
            />
            <Media.Body>
                <h5>Titulo</h5>
                <p>Precio</p>
            </Media.Body>
            </Media>
        </Container>
    )
}

export default ItemDetail

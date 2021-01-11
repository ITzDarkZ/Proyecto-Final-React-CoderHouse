import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Item = ({titulo, precio, mercadopago, imagen, id}) => {
    return (
        <div style={{padding: '3rem 1rem 1rem 5.5rem', float: 'left'}}>
            <Card style={{ width: '16rem'}}>
            <Card.Img style={{maxHeight: '90px', maxWidth:'90px', display: 'block', margin:'0 auto'}} variant="top" src={imagen} />
            <Card.Body>
                <Card.Title style={{height: '130px'}}>{titulo}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>${precio}</ListGroupItem>
                <ListGroupItem>Acepta Mercadopago? {mercadopago ? 'Si' : 'No'}</ListGroupItem>
            </ListGroup>
            <Card.Body style={{textAlign: 'center'}}>
                <Card.Link href={'/item/' + id}>Ver detalle</Card.Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item

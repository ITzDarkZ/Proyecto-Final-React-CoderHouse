import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { contextCart } from '../components/CartContext/CartContext'
import InputGroup from 'react-bootstrap/InputGroup'
import swal from 'sweetalert'
import { firestore as db, fb as firebase } from '../firebaseConfig'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'

const CheckOut = () => {
    
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [confirmar, setConfirmar] = useState(false)
    const [id, setId] = useState(undefined)

    const refreshOrders = useContext(contextCart).refreshOrders
    const cart = useContext(contextCart).Cart
    const vaciarCarrito = useContext(contextCart).clear
    let total = 0
    cart.forEach((element) => {
        total += element.item.price * element.cantidad
    });

    const handleChange = (e, type) => {
        const valor = e.target.value
        switch (type) {
            //Type 1: Nombre, Type 2: Numero, Type 3: Email, Type 4: Confirmar email
            case 1:
                if(valor.length > 3){
                    setNombre(valor)
                } else {
                    setNombre('')
                }
                break;
            case 2:
                if(valor.length === 10){
                    setTelefono(valor)
                } else {
                    setTelefono('')
                }
                break;
            case 3:
                if(valor.search(/[.]/g) !== -1){
                    setEmail(valor)
                } else {
                    setEmail('')
                }
                break;
            case 4:
                if(email !== '') {
                    if(email === valor) {
                        setConfirmar(true)
                    } else {
                        setConfirmar(false)
                    }
                } else {
                    setConfirmar(false)
                }
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(nombre === '' || email === '' || telefono === '' || !confirmar){
            swal({
                title: "Error!",
                text: "Hay algun dato erroneo, por favor revisa tus datos nuevamente",
                icon: "error",
                button: false
              });
        } else {
            const order = {
                buyer: {nombre, telefono, email},
                items: cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total
            }
            refreshOrders(order)
            const collection = db.collection('Orders')
            collection
            .add(order)
            .then((res) => {
                setId(res.id)
                const collection = db.collection('ItemCollection')
                const batch = db.batch()
                cart.forEach((element) => {
                    batch.update(collection.doc(element.item.id), {stock: element.item.stock - element.cantidad})
                })
                batch.commit()
            })
            .catch((err) => {
                console.error(err)
            })
            vaciarCarrito()
            swal({
                title: "Su compra fue confirmada!",
                text: "Gracias por confiar en nosotros!",
                icon: "success",
                button: false,
              });
        }
        
    }

    return (
        <>
        {id === undefined ?
            <Form onSubmit={handleSubmit} style={{textAlign: 'center', alignItems: 'center', margin: '0 auto', padding: '5rem', maxWidth: '600px'}}>
                <Form.Group controlId="validationName">
                <Form.Label>Nombre</Form.Label>
                <InputGroup>
                    <Form.Control
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => {handleChange(e, 1)}}
                    required
                    />
                </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationTel">
                <Form.Label>Telefono</Form.Label>
                <InputGroup>
                    <Form.Control
                    type="tel"
                    onChange={(e) => {handleChange(e, 2)}}
                    placeholder="Telefono"
                    required
                    />
                </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                    <Form.Control
                    type="email"
                    onChange={(e) => {handleChange(e, 3)}}
                    placeholder="Email"
                    required
                    />
                </InputGroup>
                </Form.Group>
                <Form.Group controlId="vaidationEmailConfirm">
                <Form.Label>Confirmar email</Form.Label>
                <InputGroup>
                    <Form.Control
                    type="email"
                    onChange={(e) => {handleChange(e, 4)}}
                    placeholder="Email"
                    required
                    />
                </InputGroup>
                </Form.Group>
                <h3>SUBTOTAL: ${total}</h3>
                <Button type="submit">Submit form</Button>
            </Form>
        :
            <Jumbotron fluid style={{background: 'white', width: '98vw', height: '88vh'}}>
                <div style={{margin:'0 auto', textAlign: 'center', padding: '10rem'}}>
                    <h1>Su compra fue efectuada correctamente!</h1>
                    <p>Puede seguir su orden con el siguiente id: {id}</p>
                    <p>En el siguiente boton podra ver todas sus ordenes: </p>
                    <p>
                        <Button variant="dark"><Link to='/orders' style={{ color: 'inherit', textDecoration: 'inherit'}}>Ordenes</Link></Button>
                    </p>
                </div>
            </Jumbotron>
        }
        </>
        
      );        
}

export default CheckOut
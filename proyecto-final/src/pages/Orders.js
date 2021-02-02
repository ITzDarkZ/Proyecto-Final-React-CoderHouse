import React, {useContext} from 'react'
import {contextCart} from '../components/CartContext/CartContext'
import Table from 'react-bootstrap/Table'

const Orders = () => {
    const orders = useContext(contextCart).Orders
    return (
        <Table responsive striped hover variant="dark">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Items</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((element, id) => {return (
                    <tr key={id}>
                        <td>{element.buyer.nombre}</td>
                        <td>{element.buyer.telefono}</td>
                        <td>{element.buyer.email}</td>
                        <td>{element.items.map((e, i) => {
                            let string = ''
                            if(element.items.length - 1 !== i){
                                string += e.item.title + ', '
                            } else {
                                string += e.item.title
                            }
                            return string
                        })}</td>
                        <td>${element.total}</td>
                    </tr>
                    )})}
            </tbody>
        </Table>
    )
}

export default Orders

import React, {useContext} from 'react'
import {contextCart} from '../CartContext/CartContext'
import ordersLogo from '../../images/orders_img.png';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const OrderWidget = () => {
    const orders = useContext(contextCart).Orders
    return (
        <Button variant="dark">
            <img style={{padding: '.1rem .5rem', height: '2rem', cursor: 'pointer'}} src={ordersLogo} alt="ordenes compras"/>
                <Badge pill variant="info">{orders.length}</Badge>
            <span className="sr-only">Ordenes de compra</span>
        </Button>
    )
}

export default OrderWidget

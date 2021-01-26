import React, {createContext, useState, useEffect} from 'react'
import {firestore as db} from '../../firebaseConfig'

export const contextCart = createContext({Productos: null, Cart: null})
const {Provider} = contextCart

const CartContext = ({children}) => {
    const cargarCarrito = () => {
        const infoCarrito = localStorage.getItem('Cart');
        if(infoCarrito) {
            return JSON.parse(infoCarrito);
        } else {
            return []
        }
    }
    const cargarProductos = () => {
        const infoCarrito = localStorage.getItem('Productos');
        if(infoCarrito) {
            return JSON.parse(infoCarrito);
        } else {
            return []
        }
    }

    const [prod, setProd] = useState(cargarProductos())
    const [cart, setCart] = useState(cargarCarrito())

    useEffect(()=>{
        const collection = db.collection('ItemCollection')
        const query = collection.get()
        query
        .then((res)=>{
            const productos = res.docs
            const prodMap = productos.map(item=>{
                return {id: item.id, ...item.data()}
            })
            setProd(prodMap)
            localStorage.setItem('Productos', JSON.stringify(prodMap))
        })
        .catch(err => {
            console.error(err)
        })
    },[])

    const isInCart = id => {
        if (cart.find(x => x.item.id === id) === undefined){
            return false
        } else {
            return true
        }
    }

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)) {
            return false
        } else {
            setCart(cart.concat([{item:item, cantidad:cantidad}]))
            localStorage.setItem('Cart', JSON.stringify([...cart, {item:item, cantidad:cantidad}]))
            return true
        }
    }

    const removeItem = id => {
        const temp = cart.filter(element => element.item.id !== id)
        localStorage.setItem('Cart', JSON.stringify(temp))
        setCart(temp)
    }

    const clear = () => {
        setCart([])
    }

    return (
        <Provider value={{Productos: prod, Cart: cart, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart}}>
            {children}
        </Provider>   
    )
}

export default CartContext

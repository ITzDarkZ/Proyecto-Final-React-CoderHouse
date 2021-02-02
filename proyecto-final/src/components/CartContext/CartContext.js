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
    const getOrders = () => {
        const infoOrders = localStorage.getItem('Orders');
        if(infoOrders) {
            return JSON.parse(infoOrders);
        } else {
            return []
        }
    }
    const [prod, setProd] = useState([])
    const [cart, setCart] = useState(cargarCarrito())
    const [categoria, setCategoria] = useState([])
    const [orders, setOrders] = useState(getOrders())

    useEffect(()=>{
        const collection = db.collection('ItemCollection')
        const query = collection.get()
        query
        .then((res)=>{
            const productos = res.docs
            const prodMap = productos.map(item =>{
                return {id: item.id, ...item.data()}
            })
            setProd(prodMap)
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

    const buscarCategoria = (categoryId) => {
        const collection = db.collection('ItemCollection')
        const query = collection.where('categoryId', '==', categoryId).get()
        query
        .then(({docs})=>{
            const categoriaFiltrada = docs.map((item)=>{
                return {id: item.id, ...item.data()}
            })
            setCategoria(categoriaFiltrada)
        })
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
        localStorage.setItem('Cart', JSON.stringify([]))
    }

    const refreshOrders = (order) => {
        setOrders([...orders, order])
        localStorage.setItem('Orders', JSON.stringify([...orders, order]))
    }

    return (
        <Provider value={{Productos: prod,
                          Cart: cart,
                          addItem: addItem, 
                          removeItem: removeItem, 
                          clear: clear, 
                          isInCart: isInCart, 
                          Categoria: categoria, 
                          buscarCategoria: buscarCategoria,
                          Orders: orders,
                          refreshOrders: refreshOrders}}>
            {children}
        </Provider>   
    )
}

export default CartContext

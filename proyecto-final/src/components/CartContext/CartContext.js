import React, {createContext, useState, useEffect} from 'react'

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

    const [prod, setProd] = useState([])
    const [cart, setCart] = useState(cargarCarrito())

    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA3025")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setProd(res.results)
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
        const temp = cart.filter(element => element.id !== id)
        setCart(temp)
    }

    const clear = () => {
        setCart([])
    }

    return (
        <Provider value={{Productos: prod, Cart: {item: cart.item, cantidad: cart.cantidad}, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart}}>
            {children}
        </Provider>   
    )
}

export default CartContext

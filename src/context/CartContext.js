import { createContext, useState } from "react";

const CartContext = createContext()
const CartProvider = ({children, defaultCart})=>{
    const[cart, setCart] = useState(defaultCart)

    const removeItem=(itemId)=>{
        const newCart=cart.slice()
        const filterCart = newCart.filter(obj => obj.item.id !== itemId)
        setCart(filterCart)
    }

    const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            console.log('El iteme ya existe')
            const object = cart.find(obj => obj.item.id === item.id)
            object.quantity += quantity
        }else{
            updateCart({item, quantity})
        }
    }
    const clearCart = () => {
        console.log('Limpieza de Carro')
        setCart(defaultCart)
    }
    const isInCart=(itemId)=>{
        return cart.find(obj => obj.item.id === parseInt(itemId))? true : false
    }
    const updateCart = (obj)=>{
        setCart([...cart, obj])
    }
    console.log('cartOut:', cart)
    return (
        <CartContext.Provider value={{clearCart, addItem, updateCart}}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    
    const[cart, setCart] = useState([])
    
    const isInCart=(itemId)=>{
        return cart.some((obj) => obj.item.id === itemId)
    }
    
    const addItem = (item,quantity)=>{
        if (isInCart(item.id)){
            const object=cart.find(obj=>obj.item.id === item.id)
            object.quantity=object.quantity+quantity
            console.log('El item ya existe en el carro')
            console.log(`${item.title} X ${object.quantity}`)
        }else{
            updateCart({item,quantity})
        }
    }
    const removeItem =(itemId)=>{
        setCart(cart.filter(product=>product.item.id !== itemId))
    }

    const updateCart =(obj)=>{
        setCart([...cart, obj])
    }
    
    const clearCart = () => {
            console.log('Limpieza de Carro')
            setCart([])
    }

    return (
        <CartContext.Provider value={{clearCart, addItem, updateCart, removeItem, cart}}>
            {children}
        </CartContext.Provider>
    )
}

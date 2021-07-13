import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'

export const CartWidget = () =>{
    const {cart}= useContext(CartContext)
    /* const [itemsCart, setItemsCart] = useState(0) */
    const sumaItems = cart.reduce((prev, next)=>prev + next.quantity, 0)
 /*    setItemsCart(sumaItems) */

    const iconShopping=<FontAwesomeIcon icon={faShoppingCart}/>
    return (
        <cart>
        <i className="iconShop">{iconShopping}</i><div className='cart' id='itemCart'>{sumaItems}</div>
        </cart>
        )
    }
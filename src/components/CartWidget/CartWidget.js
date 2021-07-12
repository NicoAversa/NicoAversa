import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () =>{
    const {cart}= useContext(CartContext)
    console.log(cart.quantity)
    const iconShopping=<FontAwesomeIcon icon={faShoppingCart}/>
    return (
        <cart>
        <i className="iconShop">{iconShopping}</i><div className='cart' id='itemCart'>{cart.quantity}</div>
        </cart>
        )
    }
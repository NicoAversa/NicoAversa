import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export const CartWidget = () =>{
    const iconShopping=<FontAwesomeIcon icon={faShoppingCart}/>
    return (
        <cart>
        <i className="iconShop">{iconShopping}</i><div className='cart'>0</div>
        </cart>
        )
    }
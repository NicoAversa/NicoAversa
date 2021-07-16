
import logo from '../../images/gstlogo.png'
import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faKeyboard, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
/* import { useContext } from 'react'
import { CartContext } from '../../context/CartContext' */

export const NavBar = () =>{
/*     const iconSearch=<FontAwesomeIcon icon={faSearch}/> */
    const iconHome=<FontAwesomeIcon icon={faHome}/>
    const iconProduct=<FontAwesomeIcon icon={faKeyboard}/>
    const iconArrow=<FontAwesomeIcon icon={faAngleDown}/>
   // const iconHelp=<FontAwesomeIcon icon={faInfo}/>
/*     const { cart } = useContext(CartContext) */
    
    return (

    <nav className="menu">
    <div className="header">
    <NavLink className="link" to='/'><img className='logo' src={logo} height={50} width={100} alt='Logo tienda' /></NavLink>
    <ul className='main-menu'>
    
    <li><NavLink exact activeClassName='active' to='/' className="link"><i>{iconHome}</i>HOME</NavLink></li>
    <li className="with-submenu"><i>{iconProduct}</i>Productos {iconArrow}
    <ul className='submenu'>
    <li><NavLink activeClassName='link-active' exact to='/category/Perifericos' className="link">Perifericos</NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/category/Monitores' className="link">Monitores</NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/category/Notebooks' className="link">Notebooks</NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/category/Equipos' className="link">Equipos</NavLink></li>
    </ul>
    </li>
    <NavLink activeClassName='link-activeCarro' className='link' exact to='/cart'><CartWidget/></NavLink>
    </ul>
    </div>
    </nav>
    )
}
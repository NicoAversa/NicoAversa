
import logo from '../../images/gstlogo.png'
import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faKeyboard, faAngleDown, faInfo } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

export const NavBar = () =>{
    const iconSearch=<FontAwesomeIcon icon={faSearch}/>
    const iconHome=<FontAwesomeIcon icon={faHome}/>
    const iconProduct=<FontAwesomeIcon icon={faKeyboard}/>
    const iconArrow=<FontAwesomeIcon icon={faAngleDown}/>
    const iconHelp=<FontAwesomeIcon icon={faInfo}/>
    
    return (
    <nav className="menu">
    <div className="header">
    <NavLink className="link" to='/'><img className='logo' src={logo} height={50} width={100} /></NavLink>
    <ul className='main-menu'>
    
    <li><NavLink exact activeClassName='active' to='/' className="link"><i>{iconHome}</i><a>HOME</a></NavLink></li>
    <li className="with-submenu"><i>{iconProduct}</i><a>Productos {iconArrow}</a>
    <ul className='submenu'>
    <li><NavLink activeClassName='link-active' exact to='/category/Todos' className="link"><a>Vista Categorías</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/ItemDetailContainer/ItemDetailContainer' className="link"><a>Insumos</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/Products/Dispositivos' className="link"><a>Dispositivos</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/Products/Monitores' className="link"><a>Monitores</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/Products/Notebooks' className="link"><a>Notebooks</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/Products/Equipos' className="link"><a>Equipos</a></NavLink></li>
    </ul>
    </li>
    <li><NavLink activeClassName='link-active' exact to='/Products/Offers' className="link"><a>Ofertas</a></NavLink></li>
    <li className="with-submenu"><NavLink  to='/MisDatos' className="link"><a>Mis Datos {iconArrow}</a>
    <ul className='submenu'>
    <li><NavLink activeClassName='link-active'  to='/MisDatos/MisCompras' className="link"><a>Mis Compras </a></NavLink></li>
    <li><NavLink activeClassName='link-active'  to='/Logout' className="link"><a>Salir</a></NavLink></li>
    </ul>
    </NavLink>
    </li>
    <li><NavLink activeClassName='link-active'  to='/Help' className="link"><i>{iconHelp}</i><a>Ayuda</a></NavLink></li>
    <div className='search'> {iconSearch} <input className='buscar' type='text' placeholder='Buscar Producto '/> <NavLink activeClassName='link-active' className='link' to='/cart'><CartWidget/></NavLink> </div>
    </ul>
    
    </div>
    </nav>
    )
}
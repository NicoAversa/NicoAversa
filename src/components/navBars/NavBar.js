
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
    <li><NavLink activeClassName='link-active' exact to='/category/Perifericos' className="link"><a>Perifericos</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/category/Monitores' className="link"><a>Monitores</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/category/Notebooks' className="link"><a>Notebooks</a></NavLink></li>
    <li><NavLink activeClassName='link-active' exact to='/category/Equipos' className="link"><a>Equipos</a></NavLink></li>
    </ul>
    </li>
    <NavLink activeClassName='link-active' className='link' to='/cart'><CartWidget/></NavLink>
    </ul>
    </div>
    </nav>
    )
}
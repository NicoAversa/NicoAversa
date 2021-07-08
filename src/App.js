
import './App.css'
import {NavBar} from './components/navBars/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Switch, Route, BrowserRouter} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {routes} from './pages/routes'
import React from 'react'

function App() {

  return <BrowserRouter>
        <Router/>
  </BrowserRouter>


/*   return <div className='App'>
  <NavBar/>
  <ItemDetailContainer/>
  </div> */
}

export default App;

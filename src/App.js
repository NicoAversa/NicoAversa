
import './App.css'
import {NavBar} from './components/navBars/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Switch, Route, BrowserRouter} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function App() {

  return <BrowserRouter>
  <Switch>
  <Route path="/cart">
  <p>Carro1</p>
  <Route path="/">
  </Route>
  <p>Home</p>
  </Route>
  </Switch>
  <footer/>
  </BrowserRouter>


/*   return <div className='App'>
  <NavBar/>
  <ItemDetailContainer/>
  </div> */
}

export default App;

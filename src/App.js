
import './App.css'
import {Switch, Route, BrowserRouter} from "react-router-dom"
import {routes} from './pages/routes'
import {React, useContext} from 'react'
import {CartContext} from './context/CartContext'

function App() {
  
  return <BrowserRouter>
        <Router/>
        </BrowserRouter>

}

export default App;

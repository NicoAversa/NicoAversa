
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {React} from 'react'
import {CartProvider} from './context/CartContext'

function App() {
  
  return (
        <CartProvider>
    <BrowserRouter>
        <Router/>
        </BrowserRouter>
        </CartProvider>  
          )
          
        

}

export default App;

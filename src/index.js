import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Routes} from './pages/routes';
import {CartProvider} from './context/CartContext'
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <Routes />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)


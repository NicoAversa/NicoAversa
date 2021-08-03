import {ItemCount} from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useState } from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({item} )=>{
    
    const [itemAmount, setitemAmount] = useState(0)
    const [precioProducto, setprecioProducto] = useState(0)
    const [categoria, setCategoria] = useState()
    const { addItem } = useContext(CartContext)
    
    const onAdd=(quantity)=>{
        setitemAmount(quantity)
        setprecioProducto(item.price)
        setCategoria(item.category)
        addItem(item,quantity)

        setprecioProducto(parseInt(quantity)*parseInt(item.price))
        document.querySelector('#comprando').style.display='none'
        document.querySelector('#comprado').style.display='block'
    }

    return (
        <>
    <div className='item-data'>
    <div className='image'><img className='imgs' src={item.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h3>{item.title}</h3>
        <label className="title">Código:</label>
        <p>{item.id}</p>
        <label>Descripción:</label>
        <p className="descr">{item.description}</p>
        <label className="title">Precio:</label>
        <h2>{item.price}</h2>
        <div id='comprando'>
        <ItemCount className="count" stock={5} initial={1} onAdd={onAdd} />
        </div>
        <Link exact to = '/cart' className="link"> <button id='comprado' className='btnEnd'>Terminar Compra</button></Link>
        </div>
    </div> 
        </>
    )
}   
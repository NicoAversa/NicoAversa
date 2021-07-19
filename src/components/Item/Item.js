import './Item.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export const Item = ({item})=>{
    const[itemId, setitemId]= useState(0)

    /*    const selItem=(itemSeleccionado)=>{
        setitemId(itemSeleccionado.target.value)
        console.log(itemSeleccionado.target.value)
    } */
    console.log(item)
    console.log({item})
    return (
        <item>
    <div className='item-data'>
    <div className='image'><img className='imgs' src={item.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h3>{item.title}</h3>
        <label className="title">Código:</label>
        <p>{item.id}</p>
        <h2>$ {item.price}</h2>
        </div>
        <Link to={`/item/${item.id}`} className='btnDetalle'>Ver Detalles</Link>
    </div> 
        </item>
    )
}   
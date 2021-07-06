import './Item.css'
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

export const Item = ({item})=>{
    const[itemId, setitemId]= useState(0)

    const selItem=(itemSeleccionado)=>{
        setitemId(itemSeleccionado.target.value)
        console.log(itemSeleccionado.target.value)
    }

    return (
        <item>
    <div className='item-data'>
    <div className='image'><img className='imgs' src={item.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h3>{item.title}</h3>
        <label className="title">Código:</label>
        <p>{item.id}</p>
        <h2>{item.price}</h2>
        </div>
        <button value={itemId} onClick={selItem}>Ver Detalles</button>
    </div> 
        </item>
    )
}   
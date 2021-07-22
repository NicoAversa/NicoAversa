import './ItemOffers.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export const ItemOffers = ({item})=>{
    const[itemId, setitemId]= useState(0)
    return (
        <item>
    <div className='item-datas'>
    <div className='image'><img className='imgs' src={item.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h3>{item.title}</h3>
        <h2>$ {item.price}</h2>
        </div>
        <Link to={`/item/${item.id}`} className='btnDetalle'>Ver Detalles</Link>
    </div> 
        </item>
    )
}   
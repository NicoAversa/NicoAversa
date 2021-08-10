import './ItemOffers.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export const ItemOffers = ({item})=>{
    const[itemId, setitemId]= useState(0)
    return (
        <>
    <div className='item-datas'>
    <div className='image'><img className='imgs' src={item.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h5>{item.title}</h5>
        <h4>$ {item.price}</h4>
        </div>
        <Link to={`/item/${item.id}`} className='btnDetalle'>Ver Detalles</Link>
    </div> 
        </>
    )
}   
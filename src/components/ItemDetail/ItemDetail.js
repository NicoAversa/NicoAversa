import {ItemCount} from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useEffect, useState } from 'react'

export const ItemDetail = ({item})=>{

    return (
        <item>
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
        </div>
        <ItemCount initial={1} stock={7} onAdd={1} />
    </div> 
        </item>
    )
}   
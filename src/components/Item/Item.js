
import {ItemCount} from '../ItemCount/ItemCount'
import './Item.css'
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

export const Item = ({item})=>{

    /*   const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/> */
        
/*     const onAdd = (items) => {
        if (props.stock !== 0) {
            alert('Ahora se deberian agregar ' + items + ' items al carrito!')
        }
    }  */
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
        <ItemCount className="count" initial={1} stock={7} onAdd={1} />
    </div> 
        </item>
    )
}   
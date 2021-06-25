/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons' */
import {ItemCount} from '../ItemCount/ItemCount'
import './Item.css'
import React, { useEffect, useState } from 'react'

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
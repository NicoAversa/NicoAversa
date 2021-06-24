/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons' */
import {ItemCount} from '../ItemCount/ItemCount'
import './Item.css'
import React, { useEffect, useState } from 'react'

export const Item = (props)=>{
    /*   const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/> */
        
    const onAdd = (items) => {
        if (props.stock !== 0) {
            alert('Ahora se deberian agregar ' + items + ' items al carrito!')
        }
    } 
    return (
        <item>
    <div className='item-data'>
    <div className='image'><img src={props.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h2>{props.title}</h2>
        <label>Código:</label>
        <p>{props.id}</p>
        <label>Descripción:</label>
        <p>{props.description}</p>
        <label>Precio:</label>
        <p>{props.price}</p>
        <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </div>
    </div> 
        </item>
    )
}   
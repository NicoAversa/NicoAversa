import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './Item.css'
import React from 'react'
export const ItemCount = ({item})=>{

    const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/>

    return (
        <item>
    <div className='item-data'>
    <div className='image'></div>
        <div className='product'>
        <h2>{item.title}</h2>
        <label>Código:</label>
        <p>{item.id}</p>
        <label>Descripción:</label>
        <p>{item.description}</p>
        <label>Precio:</label>
        <p>{item.price}</p>
        </div>
        
    </div> 
    {<ItemCount Stock='10' Initial='1' onAdd={()=>[]}/>}       
        </item>
    )
}
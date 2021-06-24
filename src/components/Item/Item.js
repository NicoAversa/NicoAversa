/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons' */
import './Item.css'
import React from 'react'

export const Item = (items)=>{

    /*   const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/> */

    return (
        <item>
    <div className='item-data'>
    <div className='image'><img src={items.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h2>{items.title}</h2>
        <label>Código:</label>
        <p>{items.id}</p>
        <label>Descripción:</label>
        <p>{items.description}</p>
        <label>Precio:</label>
        <p>{items.price}</p>
        </div>
        
    </div> 
        </item>
    )
}   
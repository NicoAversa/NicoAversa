import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './ItemListOffers.css'
import {ItemOffers} from '../ItemOffers/ItemOffers'
import React from 'react'

export const ItemListOffers = ({itemsOffers})=>{
    const loader=<FontAwesomeIcon icon={faSpinner}/>
    const itemsJSX = itemsOffers.map((item)=><ItemOffers item={item} key={item.id}/>)
    
    return (
    <div >
    {itemsJSX.length === 0 ? (
        <div className='cont'>
            <h3>NO HAY OFERTAS POR EL MOMENTO</h3>
        <div className='loading'>{loader}</div>
        </div> 
        
    ) : itemsJSX }
    </div>
    )
}
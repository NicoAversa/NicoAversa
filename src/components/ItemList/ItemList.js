import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css'
import {Item} from '../Item/Item'
import React, { useState, useEffect } from 'react'

export const ItemList = ({itemsMostrar})=>{
    const loader=<FontAwesomeIcon icon={faSpinner}/>
    const itemsJSX = itemsMostrar.map((item)=><Item item={item} key={item.id}/>)
    
    return (
    <div className='itemListContainer'>
    {itemsJSX.length === 0 ? (
        <div className='cont'>
        <div className='loading'>{loader}</div>
        </div> 
    ) : itemsJSX }
    </div>
    )
}


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css'
import React, { useState, useEffect } from 'react'

export const ItemList = ({items})=>{
    const loader=<FontAwesomeIcon icon={faSpinner}/>
    return (
    <div className='itemListContainer'>
    {items.length === 0 ? (
        <div className='cont'>
        <div className='loading'>{loader}</div>
        </div> 
    ) : (
        items.map((item)=>{
            return ( <item key={item.id} item={item.title}/>)
            console.log(item)
        })
    )}
    </div>
    )
}


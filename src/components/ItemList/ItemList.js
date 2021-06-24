import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css'
import React, { useState, useEffect } from 'react'

export const ItemList = (props)=>{
    const loader=<FontAwesomeIcon icon={faSpinner}/>
    return (
    <div className='itemListContainer'>
    {props.items.length === 0?(
        <div className='cont'><div className='loading'>{loader}</div> </div>
    ): (
        props.map((item)=>{
            return ( <itemList key={item.id} item={item.title}/>)
        })
    )}
    </div>
    )
}
/*    return (
        <itemlist>
    <div>
        
    </div>
        </itemlist>
    ) */

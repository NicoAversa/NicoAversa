import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css'
import {Item} from '../Item/Item'
import React from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ItemList = ({itemsMostrar})=>{
    const loader=<FontAwesomeIcon icon={faSpinner}/>
    const itemsJSX = itemsMostrar.map((item)=><Item item={item} key={item.id}/>)
    
    return (
    <div className='itemListContainer'>
    {itemsJSX.length === 0 ? (
        <div className='row-12'>
            <h4>CARGANDO CATEGORIA</h4>
            <div className='loading'>
            <Spinner color="success"/>
            </div>
        </div> 
        
    ) : itemsJSX }
    </div>
    )
}


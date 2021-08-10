import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './ItemListOffers.css'
import {ItemOffers} from '../ItemOffers/ItemOffers'
import React from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ItemListOffers = ({itemsOffers})=>{
    const loader=<FontAwesomeIcon icon={faSpinner}/>
    const itemsJSX = itemsOffers.map((item)=><ItemOffers item={item} key={item.id}/>)
    
    return (
    <div >
    {itemsJSX.length === 0 ? (
        <div className='row-12'>
            <h4>CARGANDO OFERTAS</h4>
            <div className='loading'>
            <Spinner color="success"/>
            </div>
        </div> 
        
    ) : itemsJSX }
    </div>
    )
}
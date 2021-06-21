import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './itemCount.css'
import React from 'react'
export const ItemCount = ()=>{

    const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/>
    const [Stock, setStock] = React.useState(5)
    const [initial, setInitial] = React.useState(1)
    const [onAdd, setOnAdd] = React.useState()

    return (
        <count>
    <div>
        <div className='container'>
        <br/>
        <div className='count'>
        <button id='btnMinus' href='#' onClick={()=>{if (initial>1) { document.querySelector('#btnMinus').disabled=false; document.querySelector('#btnAdd').disabled=false; setInitial(initial - 1)} else {document.querySelector('#btnMinus').disabled=true}}}><i>{iconMinus}</i></button>
        <label className='contador'>{initial}</label>
        <button id='btnAdd' href='#' onClick={()=>{ if(Stock>initial) { document.querySelector('#btnMinus').disabled=false; document.querySelector('#btnAdd').disabled=false;setInitial(initial + 1); } else{  document.querySelector('#btnAdd').disabled=true; alert('Supera cantidad en Stock') } }}><i>{iconPlus}</i></button>
        </div>
        <br/>
        <p>Stock Disponible:<b>{Stock}</b></p>
        <button className='btnCarrito'>Agregar al carrito</button></div>
    </div>
        </count>
    )
}
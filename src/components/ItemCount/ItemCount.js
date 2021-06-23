import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './itemCount.css'
import React, { useState } from 'react'

export const ItemCount = (props)=>{

    const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/>
    
/*   const [stock, setStock] = useState()
    const [initial, setInitial] = useState()
    const [onAdd, setOnAdd] = useState() */

    const [itemAmount, setItemAmount] = useState(props.initial)

    const minus = () => {
        if (props.stock > 0) {
            if (itemAmount > 1) {
                let newAdd = itemAmount-1
                setItemAmount(newAdd)  
            }
        }
    }
    
    const add = () => {
        if (props.stock > 0) {
            if (itemAmount <= props.stock) {
                let newAdd = itemAmount+1
                setItemAmount(newAdd)       
            }
        }
    }

    return (
        <count>
    <div className="contador">
        <div className='container'>
        <br/>
        <div className='count'>
        <button id='btnMinus' onClick={minus} disabled={itemAmount <= props.initial}><i>{iconMinus}</i></button>
        <label className='contador'>{itemAmount}</label>
        <button id='btnAdd' onClick={add} disabled={itemAmount>=props.stock}><i>{iconPlus}</i></button>
        </div>
        <br/>
        <p>Stock Disponible:<b>{props.stock}</b></p>
        <button className='btnCarrito' onClick={() => props.onAdd(itemAmount)}>Agregar al carrito</button></div>
    </div>
        </count>
    )
}
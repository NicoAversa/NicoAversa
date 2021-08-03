import './itemCount.css'
import React, { useState } from 'react'

export const ItemCount = ({initial=1,stock,onAdd=()=>{}})=>{

    const [itemAmount, setItemAmount] = useState(initial)

    const minus = () => {
        if (stock > 0) {
            if (itemAmount > 1) {
                let newAdd = itemAmount-1
                setItemAmount(newAdd)  
            }
        }
    }
    
    const add = () => {
        if (stock > 0) {
            if (itemAmount <= stock) {
                let newAdd = itemAmount+1
                setItemAmount(newAdd)       
            }
        }
    }

    return (
        <>
    <div className="contador">
        <div className='container'>
        <p>Stock Disponible:<b>{stock}</b></p>
        <div className='count'>
        <button id='btnMinus' onClick={minus} disabled={itemAmount <= initial}>-</button>
        <label className='contador'>{itemAmount}</label>
        <button id='btnAdd' onClick={add} disabled={itemAmount>=stock}>+</button>
        </div>
        <button disabled={!stock} className='btnCarrito' onClick={()=>onAdd(itemAmount)} value={itemAmount}>Agregar al carrito </button></div>
    </div>
        </>
    )
}
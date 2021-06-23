import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './itemCount.css'
import { useState } from 'react'

export const ItemCount = ({stock, initial})=>{

    const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/>
    
    const [Stock, setStock] = useState(5)
    const [Initial, setInitial] = useState(1)
    const [onAdd, setOnAdd] = useState(Initial)
    
    function plus(){
        let newAdd = parseInt(onAdd) +1
        setOnAdd(newAdd)
    }

    function minus(){
        let newAdd = parseInt(onAdd) -1
        setOnAdd(newAdd)
    }

    function addOk(){
        if(onAdd > 0){
            alert ("Agregaste " + " " + onAdd + " " + "Productos a tu carro")
        } else {
            alert ("No se agrego ningun producto a tu carro")
        }
    }

    return (
        <count>
    <div>
        <div className='container'>
        <br/>
        <div className='count'>
        <button id='btnMinus' onClick={()=>minus()} disabled={onAdd <= Initial}><i>{iconMinus}</i></button>
        <label className='contador'>{onAdd}</label>
        <button id='btnAdd' onClick={()=>plus()} disabled={onAdd>=Stock}><i>{iconPlus}</i></button>
        </div>
        <br/>
        <p>Stock Disponible:<b>{Stock}</b></p>
        <button className='btnCarrito' onClick={()=>addOk()}>Agregar al carrito</button></div>
    </div>
        </count>
    )
}
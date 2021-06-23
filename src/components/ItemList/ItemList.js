import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css'
import React from 'react'
export const ItemList = ()=>{

    const iconPlus=<FontAwesomeIcon icon={faPlusSquare}/>
    const iconMinus=<FontAwesomeIcon icon={faMinusSquare}/>
    const [Stock, setStock] = React.useState(5)
    const [initial, setInitial] = React.useState(1)
    const [onAdd, setOnAdd] = React.useState()

    return (
        <itemlist>
    <div>
        
    </div>
        </itemlist>
    )
}
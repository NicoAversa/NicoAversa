import {ItemCount} from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


export const ItemDetail = ({item} )=>{
    
    const[compra, setcompra]= useState(0)
    const[precioProducto, setprecioProducto]=useState(0)
    const[categoria, setCategoria]=useState()

    const onAdd=(quantity)=>{
        console.log(quantity)
        setcompra(quantity)
        setprecioProducto(parseInt(quantity)*parseInt(item.price))
        console.log(precioProducto)
        console.log(Number(item.price)*Number(quantity))
        document.querySelector('#comprando').style.display='none'
        document.querySelector('#comprado').style.display='block'
    }
    return (
        <item>
    <div className='item-data'>
    <div className='image'><img className='imgs' src={item.imgUrl} alt='Imágen de producto'/></div>
        <div className='product'>
        <h3>{item.title}</h3>
        <label className="title">Código:</label>
        <p>{item.id}</p>
        <label>Descripción:</label>
        <p className="descr">{item.description}</p>
        <label className="title">Precio:</label>
        <h2>{item.price}</h2>
        <div id='comprando'>
        <ItemCount className="count" stock={5} onAdd={onAdd} />
        </div>
        <Link className='link' to={'/cart'}> <button id='comprado' className='btnEnd'>Terminar Compra</button></Link>
        </div>
    </div> 
        </item>
    )
}   
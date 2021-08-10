import {Page} from '../../components/page/page'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { database } from '../../firebase/firebase'

import './cart.css'

export const Cart = ()=>{

    const { cart, removeItem, clearCart, total } = useContext(CartContext)
    let itemsCarro =false
    if (cart.length > 0){
        itemsCarro=true
    }
    const [orderId, setOrderId]=useState()
    const [error, setError]=useState()
    
    //-------------------form-----------------------------------------

    const [formData, setFormData]=useState(
        {name:"",
        surname:"",
        age:"",
        mail:""    
        }
    )  

    const [isFormDisabled, setFormDisabled]=useState(true)

    useEffect(()=>{
        if (formData.name ==='' || formData.surname ==='' || formData.mail === ''){
            setFormDisabled(true)
        }else{
            setFormDisabled(false)
        }
    },[formData])

    const onInput=({target}) => {
        const dataInput= {...formData, [target.name]:target.value}
        setFormData(dataInput)
        console.log(formData ) 
    } 

    function onSubmit(event){
        event.preventDefault()
        console.log(`Tu nombre es ${formData.name} y tu apellido es ${formData.surname}`)
    }
//-----------------------------------------------------------------------
    const finishBuy=()=>{
            const db = database;
            const orders = db.collection("orders")
            if (formData.name===""){
                alert('Ingrese sus datos para finalizar la compra')
            }else{              
                
                const itemsCart =cart.map(({item}) => ({ 
                    id:item.id,
                    title:item.title,
                    price:item.price,
                }))
                    
            const newOrder ={
                buyer: formData,
                items: itemsCart,
                date:new Date(),
                total: total
            }
            
            orders.add(newOrder).then(({id})=>{
                setOrderId(id)
                console.log(orderId)
            }).catch(err=>{
                setError(err)
                console.log(error)
            }).finally(()=>{})
            
            clearCart()
        }

    }  
    const sumaTotales = cart.reduce((prev, next)=>prev + next.item.price*next.quantity, 0)
    return (
        <Page>
        {orderId ? 
        <div className='orderFinish'> <h3> Muchas gracias por tu compra, el ID de la misma es: </h3> <p className='orderFinish'><h2 className='orderNumber'>{orderId}</h2></p>
        </div>: 
        <div>
        <h1>Carro</h1>
        
        <div className='compra'>
        <h1>Items en el Carro</h1>
        {itemsCarro && cart.map( (productos) =>
        
        <ul>
            <li>{productos.item.title}</li>
            <li>Precio Unitario: $ {productos.item.price}</li>
            <li>Cantidad: {productos.quantity}</li>
            <li className='total'>Total: $ {parseInt(productos.quantity)*parseInt(productos.item.price)}</li>
            <br/>
            <button className='btnWarning' onClick={()=>{removeItem(productos.item.id)}}>Eliminar Item</button>
        </ul>
        )}
        </div>
        <div className='totales'>
        <div className='formBuy'>
            <label htmlFor='name'>Nombre:</label>
            <input
            name='name'
            type='text'
            placeholder='Ingrese Nombre'
            onChange={onInput}
            >
            </input>
            <label htmlFor='surname'>Apellido:</label>
            <input
            name='surname'
            type='text'
            placeholder='Ingrese Apellido'
            onChange={onInput}
            >
            </input>
            <label htmlFor='age'>Edad:</label>
            <input
            name='age'
            type='text'
            placeholder='Ingrese Edad'
            onChange={onInput}
            >
            </input>
            <label htmlFor='mail'>Mail:</label>
            <input
            name='mail'
            type='text'
            placeholder='Ingrese e-mail'
            onChange={onInput}
            >
            </input>
            <input value='Registrar Datos' type='submit' onClick={onSubmit} disabled={isFormDisabled} /> 
        </div>
        <div className="Buy">
        <h1>TOTALES</h1>
        <h3 className='total'>$ {sumaTotales}</h3>
        <button className='btnDanger' onClick={()=>{clearCart()}}>Vaciar Carrito</button>
        <button className='btnSuccess' onClick={()=>{finishBuy()}}>Finalizar Compra</button>
        <Link className='btnVolver' exact to= '/' >Seguir Comprando</Link>
        </div>
        </div>
        </div>
    }
    </Page>
    )
}
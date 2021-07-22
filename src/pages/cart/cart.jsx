import {Page} from '../../components/page/page'
import { useContext, useState } from 'react'
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

    const finishBuy=()=>{
            const db = database;
            const orders = db.collection("orders")

            const itemsCart =cart.map(({item}) => ({ 
                id:item.id,
                title:item.title,
                price:item.price,
            }))

            const userInfo = 
            {
                name:'Nicolás', 
                phone:'3492302587', 
                email:'blackcatdsw@gmail.com'
            }

            const newOrder ={
                buyer: userInfo,
                items: itemsCart,
                date:new Date(),
                total: total
            }

            orders.add(newOrder).then(({id})=>{
                setOrderId(id)
                console.log(id)
                console.log('id orden: ',orderId)
            }).catch(err=>{
                setError(err)
            }).finally(()=>{})
            alert(`GRACIAS POR SU COMPRA, SU NUMERO DE ORDEN ES: ${orderId}`)
            clearCart()
    }  
    const sumaTotales = cart.reduce((prev, next)=>prev + next.item.price*next.quantity, 0)
    console.log(sumaTotales)
    return (
        <Page>
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
        <h1>TOTALES</h1>
        <h3 className='total'>$ {sumaTotales}</h3>
        <button className='btnDanger' onClick={()=>{clearCart()}}>Vaciar Carrito</button>
        <br/>
        <br/>
        <button className='btnSuccess' onClick={()=>{finishBuy()}}>Finalizar Compra</button>
        <br/>
        <br/>
        <Link className='btnVolver' exact to= '/' >Seguir Comprando</Link>
        </div>
    </Page>
    )
}
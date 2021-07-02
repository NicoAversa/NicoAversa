import './ItemDetailContainer.css'
import React,{useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {Page} from '../../components/page/page'

export const ItemDetailContainer = () =>{

    const product = {
            imgUrl: 
            'http://www.kuantumstore.com/web/image/product.product/10406/image_1024/%5BA5874%5D%20Teclado%20Gamer%20Mecanico%20Redragon%20k556%20RGB%20Devarajas?unique=b3346be',
            title: 
            "Teclado Gamer Mecánico ",
            id: "1254",
            description: 
            " Interruptores mecánicos personalizados Interruptor de modo personalizable Pulse Fn  inspgdn para cambiar a modo de Progamer Construcción de aluminio y ABS -Fabricado con 104 teclas flotante estándar.",
            price: 
            "$3900",
        }

const [itemsMostrar, setItemsMostrar] = useState({})
    useEffect(()=>{
        const getItemsMostrar=new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(product) ,2000)
        })
            
    getItemsMostrar.then(
        product => {
            setItemsMostrar(product)
            console.log(product)
        },
        error => {
            console.log('ALGO FALLO')
        })
    }, [])

    return (     
        
        <Page>
            <ItemDetail item={itemsMostrar}/>
        </Page>
        
        )}
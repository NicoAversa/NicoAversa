import { useEffect, useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {Item} from '../Item/Item'
import {ItemList} from '../ItemList/ItemList'
export const ItemListContainer = (props) =>{

const products = [
        {
            imgUrl: 
            'http://www.kuantumstore.com/web/image/product.product/10406/image_1024/%5BA5874%5D%20Teclado%20Gamer%20Mecanico%20Redragon%20k556%20RGB%20Devarajas?unique=b3346be',
            title: 
            "Teclado Gamer Mecánico ",
            id: "1254",
            description: 
            " Interruptores mecánicos personalizados Interruptor de modo personalizable Pulse Fn  inspgdn para cambiar a modo de Progamer Construcción de aluminio y ABS -Fabricado con 104 teclas flotante estándar.",
            price: 
            "$3900",
        },
        {
            imgUrl: 
            "https://http2.mlstatic.com/D_NQ_NP_672835-MLA30090470081_042019-O.webp",
            title: 
            "Mouse Gamer ",
            id: "1268",
            description: 
            " PICTEK Gaming Mouse Wired, 8 Programmable Buttons, Chroma RGB Backlit, 7200 DPI Adjustable, ",
            price: 
            "$3500",
        },
        {
            imgUrl: 
            "https://d34zlyc2cp9zm7.cloudfront.net/products/62b3b22c322b9b03a4bf90432096905871f7389d9c5b9b95bcf6060a60179c28.jpg_500",
            title: 
            'Monitor Curvo 24"',
            id: "1108",
            description: 
            " Descubri una verdadera experiencia inmersiva con el monitor curvo de Samsung. La gran curva de Samsung te pondrá en el centro de tu contenido multimedia.",
            price: 
            "$32800",
        },
    ]
    
    const [itemsMostrar, setItemsMostrar] = useState([])
    useEffect(()=>{
        const getItemsMostrar=new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(products) ,2000)
        })
            
    getItemsMostrar.then(
        products => {
            setItemsMostrar(products)
            console.log(products)
        },
        error => {
            console.log('ALGO FALLO')
        })
    }, []) // [] parametro a pasar al useEffect para q no genere el loop infinito 

    return (     
        
        <items clasName='list'>
            {props.greetings}
            <hr/>
            <ItemList itemsMostrar={itemsMostrar}/>
            <br/>
            <br/>
        </items>
        
        )
    } 
    
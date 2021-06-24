import { useEffect, useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {Item} from '../Item/Item'
import {ItemList} from '../ItemList/ItemList'
export const ItemListContainer = (props) =>{
    
    const onAdd = (items) => {
        if (props.stock !== 0) {
            alert('Ahora se deberian agregar ' + items + ' items al carrito!')
        }
    } 
    
    const [items, setItems] = useState([])
    useEffect(()=>{
        const getItems=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {
                        imgUrl: 
                        "http://www.kuantumstore.com/web/image/product.product/10406/image_1024/%5BA5874%5D%20Teclado%20Gamer%20Mecanico%20Redragon%20k556%20RGB%20Devarajas?unique=b3346be",
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
                        " PICTEK Gaming Mouse Wired, 8 Programmable Buttons, Chroma RGB Backlit, 7200 DPI Adjustable, Comfortable Grip Ergonomic Optical PC Computer Gaming Mice With Fire Button, Black",
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
                        " Descubri una verdadera experiencia inmersiva con el monitor curvo de Samsung. Con una pantalla de 1.800R, disfrutá de un campo de visión parecido a una pantalla iMax, una gran curva con radio de 1.800 mm que crea un campo visual más amplio, mejora la profundidad y minimiza la distracción para que te concentres en tu contenido. No importa si es una película en línea, tu serie favorita de TV o un juego de carreras. La gran curva de Samsung te pondrá en el centro de tu contenido multimedia.",
                        price: 
                        "$32800",
                    },
                ])
            
            },2000);
            getItems.then((arr)=>{
            setItems(arr)
            console.log(arr)
            })
            getItems.catch((err)=>{
            })

            
        })
    })
    return (     
        
        <items clasName='list'>
            <hr/>
            <ItemList items={items}/>
            <br/>
            <ItemCount/>
            <br/>
            
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </items>
        
        )
    } 
    
import './ItemDetailContainer.css'
import React,{useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {Page} from '../../components/page/page'
import { useParams } from 'react-router'
import { dataBase } from '../../firebase/firebase'

export const ItemDetailContainer = () =>{

/*     useEffect(()=>{
        const db = getFirestore()

        const itemCollection=db.collection('tienda-gst')
        const item = itemCollection.doc(itemId)

        item.get().then((doc)=>{
            if (!doc.exists){
                console.log('El item no existe!')
                return
            }
            console.log('Item encontrado')
            setitemsMostrar({id: doc-id, ...doc.data()})
        }).catch((error)=>{
            console.log('Error buscando items', error)
        }).finally(()=>{
            setLoading(false)
        })
    }, []) */

    const product = [
        {
            imgUrl: 
            'http://www.kuantumstore.com/web/image/product.product/10406/image_1024/%5BA5874%5D%20Teclado%20Gamer%20Mecanico%20Redragon%20k556%20RGB%20Devarajas?unique=b3346be',
            title: 
            "Teclado Gamer Mecánico ",
            id: "1254",
            description: 
            " Interruptores mecánicos personalizados Interruptor de modo personalizable Pulse Fn  inspgdn para cambiar a modo de Progamer Construcción de aluminio y ABS -Fabricado con 104 teclas flotante estándar.",
            price: 
            "3900",
            category:
            "Perifericos"
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
            "3500",
            category:
            "Perifericos"
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
            "32800",
            category:
            "Monitores"
        },
    ]
    const {itemId} = useParams()

    const [itemsMostrar, setitemsMostrar] = useState([])
    
    
    useEffect(()=>{
        const getItemsMostrar=new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(product.filter((producto)=>parseInt(producto.id)===parseInt(itemId))) ,1000)
            
        })
            
    getItemsMostrar.then(
        (detalleProducto)=>{
            setitemsMostrar(detalleProducto[0])
        },
        error => {
            console.log('ALGO FALLO')
        })
        
    }, [itemId]) // [] parametro a pasar al useEffect para q no genere el loop infinito 
    return (     
        
        <Page>
            <ItemDetail item={itemsMostrar}/>
        </Page>
        
        )}
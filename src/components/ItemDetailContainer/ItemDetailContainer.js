import './ItemDetailContainer.css'
import React,{useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {Page} from '../../components/page/page'
import { useParams } from 'react-router'
import { database } from '../../firebase/firebase'

export const ItemDetailContainer = () =>{

    const {itemId} = useParams()

    const [itemsMostrar, setItemsMostrar] = useState([])
    
    useEffect(()=>{
        const db = database
        const itemCollection=db.collection('items')
        const item = itemCollection.doc(itemId)

        item.get().then((doc)=>{
            if (!doc.exists){
                console.log(item)
                console.log('El item no existe!')
                return
            }
            setItemsMostrar({id: doc.id, ...doc.data()})
        }).catch((error)=>{
            console.log('Error buscando items', error)
        }).finally(()=>{
        
        })
    }, [itemId]) 
    return (     
        
        <Page>
            <ItemDetail item={itemsMostrar}/>
        </Page>
        
        )}
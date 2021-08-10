import { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {ItemList} from '../ItemList/ItemList'
import { database } from '../../firebase/firebase'
import { Page } from '../page/page'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export const ItemListContainer = (props) =>{

    const {categoryId} = useParams()
    
    const [itemsMostrar, setItemsMostrar] = useState([])
    
    useEffect(()=>{
        <Spinner color='success'/>
        const db = database;
        const itemCollection = db.collection("items");
        const categorias= itemCollection.where('category',"==",categoryId)
        categorias.get().then((querySnapshot) => {
        if (querySnapshot.size === 0){
            console.log('No hay resultados');
        }
        setItemsMostrar(querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}  )));
    }).catch((error) => {
        console.log('Error buscando Items', error);
    }).finally(() => {
        
    })
}, [categoryId]); 

    return (     
        
        <Page className='list'>
            <h2>{categoryId}</h2>
            <ItemList itemsMostrar={itemsMostrar}/>
            <br/>
            <br/>
        </Page>
        
        )
    } 
    
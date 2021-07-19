import { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {ItemList} from '../ItemList/ItemList'
import { database } from '../../firebase/firebase'
import { Page } from '../page/page'
export const ItemListContainer = (props) =>{

    //conexión a firebase----->
    

    const {categoryId} = useParams()
    
    const [itemsMostrar, setItemsMostrar] = useState([])
    
    useEffect(()=>{
       // setLoading(true);
        const db = database;
        const itemCollection = db.collection("items");
        const categorias= itemCollection.where('category',"==",categoryId)
        categorias.get().then((querySnapshot) => {
        if (querySnapshot.size === 0){
            console.log('No hay resultados');
        }
        setItemsMostrar(querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}  )));
        console.log(querySnapshot.docs.map(doc => ({id:doc.id}  )))
    }).catch((error) => {
        console.log('Error buscando Items', error);
    }).finally(() => {
        //setLoading(false);
    })
}, [categoryId]); 

    /* useEffect(()=>{
        const getItemsMostrar=new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(products) ,1000)
            
        })
        
    getItemsMostrar.then(
        products => {
            const filtro = products.filter((cat)=>cat.category===categoryId)
            setItemsMostrar(filtro)
        },
        error => {
            console.log('ALGO FALLO')
        })
        
    }, [categoryId]) // [] parametro a pasar al useEffect para q no genere el loop infinito 
 */
    return (     
        
        <Page className='list'>
            <h1>{categoryId}</h1>
            <ItemList itemsMostrar={itemsMostrar}/>
            <br/>
            <br/>
        </Page>
        
        )
    } 
    
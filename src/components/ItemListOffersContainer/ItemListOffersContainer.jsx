import { useEffect, useState } from 'react'
import { ItemListOffers } from '../ItemListOffers/ItemListOffers'
import { database } from '../../firebase/firebase'

export const ItemListOffersContainer = (props) =>{

    
    //conexión a firebase----->
    
    const [itemsOffers, setItemsOffers] = useState([])
    
    useEffect(()=>{
       // setLoading(true);
        const db = database;
        const itemCollection = db.collection("items");
        const ofertas= itemCollection.where('offer',"==",true)
        ofertas.get().then((querySnapshot) => {
        if (querySnapshot.size === 0){
            console.log('No hay resultados');
        }
        setItemsOffers(querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}  )));
    }).catch((error) => {
        console.log('Error buscando Items', error);
    }).finally(() => {
        //setLoading(false);
    })
}, []); 

    return (     
            <>
            <h1>Productos en Oferta!!</h1>
            <ItemListOffers itemsOffers={itemsOffers}/>
            <br/>
            <br/>
            </>
        )
    } 
    
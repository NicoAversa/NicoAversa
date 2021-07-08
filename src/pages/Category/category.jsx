import {Page} from '../../components/page/page'
import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import { NavBar } from '../../components/navBars/NavBar'

export const Category = ()=>{
    const {categoryId} =useParams()
    return (
    <Page>
        <NavBar/>
        <h1>Categoria: {categoryId}</h1>
        <ItemListContainer/>
    </Page>
    )
}
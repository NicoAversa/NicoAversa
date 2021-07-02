import {Page} from '../../components/page/page'
import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'

export const Category = ()=>{
    const {categoryId} =useParams()
    return (
    <Page>
        <h1>Categoria: {categoryId}</h1>
        <ItemListContainer/>
    </Page>
    )
}
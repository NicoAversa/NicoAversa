import {Page} from '../../components/page/page'
import { useParams } from 'react-router-dom'

export const Categories = ()=>{
    const {categoryId} =useParams()
    return (
    <Page>
        <h1>Categoria: {categoryId}</h1>
    </Page>
    )
}
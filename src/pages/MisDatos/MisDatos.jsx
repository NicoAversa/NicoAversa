import {Page} from '../../components/page/page'
import { useParams } from 'react-router-dom'

export const MisDatos = ()=>{
    const {MyData} =useParams()
    return (
    <Page>
        <h1>{MyData}</h1>
    </Page>
    )
}
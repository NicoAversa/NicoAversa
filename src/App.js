
import './App.css'
import {NavBar} from './components/navBars/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return <div className='App'>
  <NavBar/>
  <ItemListContainer/>
  </div>
}

export default App;

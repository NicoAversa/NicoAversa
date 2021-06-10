
import './App.css'
import './components/navBars/NavBar.css'
import logo from './images/gstlogo.png'
import { NavBar } from './components/navBars/NavBar'
function App() {
  return <div className='App'>
    <img className='logo' src={logo} height={50} width={100} /><NavBar />
  </div>
}

export default App;

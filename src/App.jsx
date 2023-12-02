import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceList from './components/PriceList/PriceList'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <NavBar></NavBar>
        <PriceList></PriceList>
        <Footer></Footer>
    </>
  )
}

export default App

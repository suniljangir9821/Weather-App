import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Weather from './Components/Weather'
import Navbar from './Components/Navbar'

function App() {
  const [mode,setMode] = useState('light')
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#123'
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
  } 
  return (
    <>
    <Navbar toggleMode={toggleMode} mode={mode} />
    <Weather mode={mode} />
    </>
  )
}

export default App

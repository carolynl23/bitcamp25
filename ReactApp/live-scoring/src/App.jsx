import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  //C3B32haPb6huuznE mongo pw

  return (
    <>
      <NavBar></NavBar>
    
      <div id="center">
        <input type="text" placeholder="Enter Score Here:"/>
        <br></br>
        <button type="submit">Submit Score</button>
      </div>
    </>
  )
}

export default App

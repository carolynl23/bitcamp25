import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Events from './components/Events'

function App() {
  const [ring, setRing] = useState(0)
  //C3B32haPb6huuznE mongo pw

  return (
    <>
      <NavBar></NavBar>
      <Events></Events>
      <div id="center">
        <input type="text" placeholder="Enter Score Here:"/>
        <br></br>
        <button type="submit">Submit Score</button>
      </div>
    </>
  )
}

export default App

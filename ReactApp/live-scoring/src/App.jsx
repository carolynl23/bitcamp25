import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //C3B32haPb6huuznE mongo pw

  return (
    
    <div id="center">
      <input type="text" placeholder="Enter Score Here:"/>
      <br></br>
      <button type="submit">Submit Score</button>
    </div>
  )
}

export default App

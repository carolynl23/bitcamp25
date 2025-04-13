import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const comps = ["a", "b", "c"]
  const [name, setName] = useState(comps[0])
  const [score, setScore] = useState("")
  const [event, setEvent] = useState("")
  const [ranking, setRanking] = useState(0)

  async function getScores() {
    try {
      const response = await fetch(`http://localhost:8000/api/${event}/${name}`);
      if (!response.ok) {
        throw new Error("Error with getting athlete score")
      }
      const data = await response.json();
      console.log(data)
    }
    catch(error) {
      console.log(error.message);
    }
  }

  async function submitScore() {
    try {
      const response = await fetch('http://localhost:8000/api/submit_score', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          name: name,
          score: score,
          event : {
            name : "adv_cq",
            eventId : 1,
          },
          ranking : 1
        }),
      });
      if (!response.ok) {
        throw new Error("Error with fetch");
      }
      console.log("success")
    }
    catch(error) {
      console.log(error.message)
    }
  }

  return (  
    <div id="center">
      <h2>Enter Score for {name}</h2>
      <input type="text" placeholder="Enter Score Here:" value={score} onChange={(e) => setScore(e.target.value)}/>
      <br></br>
      <button onClick={submitScore}>Submit Score</button>

      <h2>Get score for</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder="Event" onChange={(e) => setEvent(e.target.value)}/>
      <button onClick={getScores}>get</button>
    </div>
  )
}

export default App

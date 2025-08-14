import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([0])

  useEffect(() => {
    //axios.get('https://localhost:5000/jokes')
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })

      .catch(error => {
        console.log(error)
      })
  })
  return (
    <>
      <h1>Connect Frontend & Backend</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (

          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>

        ))

      }
    </>
  )
}

export default App

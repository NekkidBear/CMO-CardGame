import { useState } from 'react'
import './App.css'
import CMODeck from './Deck/Deck.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CMODeck />
    </>
  )
}

export default App

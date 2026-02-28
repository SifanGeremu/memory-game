import { useState } from 'react'
import './index.css'
import { GameHeader } from './components/GameHeader.jsx';
import Card from './components/Card.jsx';

const cardValues =["🍎",
"🍌",
"🍓",
"🍇",
"🍎",
"🍌",
"🍓",
"🍇",
"🍎",
"🍌",
"🍓",
"🍇",
"🍎",
"🍌",
"🍓",
"🍇"]
function App() {
  return( 
   <div className="app">
<GameHeader score={4} moves={2} />
<div className="cards-grid">
  {cardValues.map((card)=>(
<Card card={card}/>
  ))}
</div>
   </div>
  )
}

export default App

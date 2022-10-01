import { useState } from 'react'
import Router from './Routes'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div >
     <Router/>
  </div>
  )
}

export default App

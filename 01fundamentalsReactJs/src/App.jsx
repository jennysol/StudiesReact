import { useState } from 'react';
import { Header } from './components/Header';

import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h1>Vite + React</h1>
    </div>
  )
}

export default App

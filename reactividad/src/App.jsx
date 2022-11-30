import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [word, setWord] = useState('')

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="grid-container">
        <div className='grid-item'>
          <h1>Bienvenido</h1>
        </div>
        <div className='grid-dinamic'>
          <h1>{word}</h1>
        </div>
      </div>
      
        <input type="text" onChange={e => {setWord(' ' + e.target.value)}} />      
    </div>
  )
}

export default App

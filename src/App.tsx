import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NameProvider } from './hooks/Context';
import Display from './Display';
import Author from './Author';
import Admin from './Admin';
function App() {
  const [count, setCount] = useState(0)

  return (
    <NameProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Author/>
        <br />
        <Admin/>
      </div>
      <h1>React Context API</h1>
      <Display></Display>
    
    </NameProvider>
  )
}

export default App

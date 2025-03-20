import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import AnimationTest from "./components/AnimationTest.jsx";
import LottieTest from "./components/LottieTest.jsx";
import SpringTest from "./components/SpringTest.jsx";
import IntersectionTest from "./components/IntersectionTest.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex justify-center gap-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <LottieTest />
        <IntersectionTest />
      <h1 className="text-6xl text-amber-300 font-extrabold">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <SpringTest />
        <AnimationTest/>
    </div>
  )
}

export default App

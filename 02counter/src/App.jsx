import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  let [counter, vinCounter] = useState(0);

  const addValue = () => {
    // counter++;
    // console.log(counter);
    vinCounter(counter + 1);
  }

  const decrementValue = () => {
    vinCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment {counter}</button>
      <br/>
      <button  onClick={decrementValue}>Decrement {counter}</button>
    </>
  )
}

export default App

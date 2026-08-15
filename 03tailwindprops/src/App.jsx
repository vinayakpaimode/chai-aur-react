import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import List from './components/List'
import './App.css'

function App() {
 
  const myobj = {
    name: 'Vinayak paimode',
    email: 'Vinayak paimode',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

  return (
    <>
      <List nameis="Vinayak" someobj={myobj} />
    </>
  )
}

export default App

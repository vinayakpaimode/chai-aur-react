import { useState } from 'react'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

// 08mainContext\src\components\Login.jsx

function App() {

  return (
    <UserContextProvider> 
      <h1>Vinayak Paimode</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
   
  )
}

export default App

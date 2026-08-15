import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
    <h1>CUSTOM App</h1>
    </>
  )
}

const anotherUsername = 'Chaitanya sager';

const reactElement = React.createElement('a', { href: 'https://www.reactjs.org', target: '_blank' }, 'Learn React',anotherUsername);

createRoot(document.getElementById('root')).render(
  <> 
    <App />
    {reactElement}
   </>
  
)

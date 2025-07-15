import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myElement = <h1>CSE</h1>
createRoot(document.getElementById('root')).render(
  myElement
)

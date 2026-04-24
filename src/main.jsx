import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  // import BrowserRouter and wrap your app with it in order to gain access to React-Router features
  // remove strictMode
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

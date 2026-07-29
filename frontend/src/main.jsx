import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import './home/home.css'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/dashboard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home />
   <Dashboard />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import './Home/home.css'
import Home from './Home/Home.jsx'
import AIWorkspace from './SmrtAgents/AiWorkspace.jsx'
import Dashboard from './dashboard/dashboard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home/>
   <AIWorkspace/>
   <Dashboard />

  </StrictMode>,
)

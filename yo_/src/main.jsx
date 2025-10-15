import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UtilityProvider } from "./Context/UtilityContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UtilityProvider>

    <App />

    </UtilityProvider>
  </StrictMode>,
)

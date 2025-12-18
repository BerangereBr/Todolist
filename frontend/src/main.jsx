import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContext } from './contexts/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </StrictMode>,
)

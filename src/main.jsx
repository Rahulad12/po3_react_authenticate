import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { AuthProvider } from './contexts/AuthContext.jsx'
import { EmployeeProvider } from './contexts/EmployeeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
          <App />
      </EmployeeProvider>
    </AuthProvider>
  </StrictMode>,
)

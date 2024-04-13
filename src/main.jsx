import React from 'react'
import ReactDOM from 'react-dom/client'
import './styless.css'
import { LoginPage } from './auth/pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ItensProvider } from './context/ItensContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItensProvider>
      <App />
    </ItensProvider>
  </React.StrictMode>
)

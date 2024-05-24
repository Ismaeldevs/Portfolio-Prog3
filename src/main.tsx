import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeContextProvider } from './Context/ThemeContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
)

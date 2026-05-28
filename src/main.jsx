import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'

window.history.scrollRestoration = 'manual'

window.addEventListener('load', () => {
  window.scrollTo(0, 0)

  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LangProvider>
      <App />
    </LangProvider>
  </ThemeProvider>
)
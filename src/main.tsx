import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import App1 from './components/useEffect.tsx'
import TodoApp from './components/task.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App1/>
    <TodoApp/>
  </StrictMode>,
)

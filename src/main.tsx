import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainPage } from './components/UI/MainPage.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)

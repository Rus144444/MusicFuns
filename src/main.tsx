import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainPage } from './UI/MainPage/MainPage'
import { Footer } from './UI/Footer/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
    <Footer/>
  </StrictMode>,
)

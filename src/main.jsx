import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountDownTime from './lec1801/countdownTimer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CountDownTime/>
  </StrictMode>,
)

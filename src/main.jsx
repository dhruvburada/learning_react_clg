import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FunctionComp1 from './lec3112/hookcomp1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunctionComp1/>
  </StrictMode>,
)

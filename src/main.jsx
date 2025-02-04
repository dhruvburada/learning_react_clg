import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserContextExample} from './lec0302/file3'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserContextExample/>
  </StrictMode>,)

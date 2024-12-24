import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timetable from './lec2412/TimeTable';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Component2/> */}
   {/* <Inputs/> */}
    <Timetable></Timetable>
  
  </StrictMode>,
)

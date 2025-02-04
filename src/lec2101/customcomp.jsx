import { useState } from "react";
import UserComponent1 from "./cleanup";

const ShowHideUser = ({xyz})  =>( xyz ? <UserComponent1/>  : null);

function Conditional ()
{
    const [show,setShow] = useState(false);
    return (
        <div>
            <button onClick={()=> setShow(!show)}>Toggle User</button>
            <ShowHideUser xyz={show}/>
        </div>
    )
}

export default Conditional;



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import CountDownTime from './lec1801/countdownTimer'
// import Conditional from './lec2101/customcomp'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <Conditional/>
//   </StrictMode>,
// )

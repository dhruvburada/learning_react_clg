// import * as React from 'react';
import { useState } from 'react';

function FunctionComp1()
{
    const [Name] = useState("Hello");
    return <h1>{Name}</h1>;
}

export default FunctionComp1


// main.jsx

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import FunctionComp1 from './lec3112/hookcomp1'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <FunctionComp1/>
//   </StrictMode>,
// )

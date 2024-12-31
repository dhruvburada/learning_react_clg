import * as React from 'react';


//Creating a Function component with some default properties

const MyButton3 = ({ isDisabled, text }) => (
  <button disabled={isDisabled}>{text}</button>
);


//If user doesnt passes this attributes then this values will be applied

MyButton3.defaultProps = {
    isDisabled : false,
    text : 'Click Me'
}

export default MyButton3;

// main.jsx

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import MyButton3  from './lec3112/functionalComponents'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyButton3 text={"Submit"}/>
//     <MyButton3 isDisabled={true} text={"Dhruv"}/>
//   </StrictMode>,
// )

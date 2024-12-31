import * as React from "react";
import MyButton from "./mybtn"; // Import MyButton
import MyList from "./mylist"; // Import MyList

class CombinedComponent extends React.Component {
  render() {
    const items = ['Dhruv ', 'Mayur', 'Hemanshi']; // List items
    const buttonDisabled = false; // Button enabled/disabled state
    const buttonText = "Submit"; // Button text

    return (
      <div>
        <MyButton xyz={buttonDisabled} abc={buttonText} />
        <MyList itms={items} />
      </div>
    );
  }
}
export default CombinedComponent;



// main.jsx 

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import CombinedComponent from './lec3112/combined'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CombinedComponent/>
//   </StrictMode>,
// )

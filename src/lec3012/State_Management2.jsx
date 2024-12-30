import * as React from 'react';

class StateDemo2 extends React.Component {
  state = {
    name: 'Dhurv',
    isActive: true,
    age: 18,
    h1color: 'blue',
    h2color: 'green',
  };

  constructor() {
    super();
    // setTimeout(
    //   () =>
    //     this.setState({
    //       name: 'Dhurv',
    //       isActive: false,
    //       age: 18,
    //       h1color: 'red',
    //       h2color: 'blue',
    //     }),
    //   3000
    // );

    setInterval(() => this.setState({ h1color: 'blue', h2color: 'green' }), 2000);

 
  }
  render() {
    const { name, isActive, age, h1color, h2color } = this.state;
    return (
      <div>
        <h1 style={{ color: h1color }}>Name : {name}</h1>
        <h2 style={{ color: h2color }}>Age : {age}</h2>
        <button disabled={isActive}>Button</button>
      </div>
    );
  }
}

export default StateDemo2;



//main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import StateDemo2 from './lec3012/State_Management2'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StateDemo2/>
//   </StrictMode>,
// )

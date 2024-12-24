import * as React from "react";

class Component1 extends React.Component {
    render()
    {
        return (

            <div>

                <h2>Hello there !!</h2>
                <h1>Dhruv Burada</h1>
            </div>
        );
    }
}


//Calling  compnent inside a component

class Component2 extends React.Component {
    render()
    {
    return (
        <div>
            <Component1 /> 
            <h3>How are you ??</h3>
        </div>
    )
    }
}


export default Component2; // you will have to export all the components you want to use in different files
import * as React from 'react';

class StateDemo extends React.Component {

    state = { name : "Dhurv", isActive : true , age : 18}

    render()
    {
        return (
            <div>
                <h1>Name : {this.state.name}</h1>
                <h2>Age : {this.state.age}</h2>
                <button disabled={this.state.isActive}>Button</button>
                
            </div>
        );
    }



}

export default StateDemo;

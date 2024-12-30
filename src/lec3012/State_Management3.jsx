import * as React from 'react';

class StateDemo3 extends React.Component {
  state = {
    first: 'Loading...',
    second: 'Loading...',
    third: 'Loading...',
    fourth: 'Loading...',
    complete: 'Loading completed successfully',
  };

  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: 'done' }), 2000;
    });
    setTimeout(() => {
      this.setState({ second: 'done' }), 4000;
    });
    setTimeout(() => {
      this.setState({ third: 'done' }), 6000;
    });
    // setTimeout(() => {
    //   this.setState((state) => ({
    //     ...state,
    //     first: state.complete,
    //     second: state.complete,
    //     third: state.complete,
    //     fourth: state.complete,
    //   }));
    // }, 8000);

  }

  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.state)
            .filter((keys) => keys !== "cmplmsg")
            .map((keys) => (
              <li key={keys}>
                <strong>{keys} : </strong>
                {this.state[keys]}
              </li>
            ))}
        </ul>
      </div>
    );
  }
};


export default StateDemo3;

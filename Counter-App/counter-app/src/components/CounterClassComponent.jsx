// import React from "react";
// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h1 className="counter-display">{this.state.count}</h1>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p className="counter-display">Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClassComponent;

import React, { Component } from "react";

export default class Increment extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Call back function: ", this.state.count);
      }
    );
  };
  incrementFive = () => {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  };
  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={this.incrementFive}>Increase</button>
      </div>
    );
  }
}

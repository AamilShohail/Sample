import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  changeMessage = () => {
    this.setState({
      message: "Thanks for clicking",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Method</button>
      </div>
    );
  }
}

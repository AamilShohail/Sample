import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevSate) => {
      return { count: prevSate.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>This is the concrete</h2>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

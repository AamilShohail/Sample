import React, { Component } from "react";

export default class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

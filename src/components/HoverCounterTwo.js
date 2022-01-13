import React, { Component } from "react";

export default class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Mouse hovered {count} times</h2>
      </div>
    );
  }
}

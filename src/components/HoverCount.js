import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";
class HoverCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          {this.props.name} hovered {count} times
        </h1>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCount);

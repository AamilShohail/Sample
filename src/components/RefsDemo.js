import React, { Component } from "react";

export default class RefsDemo extends Component {
  render() {
    return (
      <div>
        <input type="text" autoFocus={true} placeholder="make sure" />
        <input type="text" autoFocus />
      </div>
    );
  }
}

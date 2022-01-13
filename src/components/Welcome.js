import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <p>
          Welcome class Component {this.props.name}- {this.props.name}
        </p>
        {this.props.children}
      </>
    );
  }
}




  
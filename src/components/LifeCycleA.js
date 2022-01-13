import React, { Component } from "react";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shohail",
    };
    console.log("LifeCycleA contructor");
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("LifeCycleA render");
    return <div></div>;
  }
}

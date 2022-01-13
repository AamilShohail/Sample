import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
    uses
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Ali - Samsunnisa",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return <ChildComponent greetHandler={this.greetParent} />;
  }
}

import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: null,
    };
  }

  render() {
    return this.state.isLoggedIn ?? <h3>Welcome aamilshohail</h3>;
  }
}

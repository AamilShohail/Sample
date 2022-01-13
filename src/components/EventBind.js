import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Welcome",
    };
    this.goodBye = this.goodBye.bind(this);
  }
  goodBye() {
    this.setState({
      message: "Good Bye",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button ref={this.state.message} onClick={this.goodBye}>
          Say Bye
        </button>
        <button ref={this.state.message} onClick={() => this.goodBye()}>
          Say Bye
        </button>
        <button ref={this.state.message} onClick={this.goodBye.bind(this)}>
          Say Bye
        </button>
      </div>
    );
  }
}

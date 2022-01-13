import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: '',
      info: '',
    };
  }
  static getDerivedStateFromError(error) {
    console.log(`The error is ${error}`);
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    this.setState({
      error: error.toString(),
      info: info.componentStack.toString(),
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong, please contact your admin
          <h2>Error caused due to {this.state.error}</h2>
          <h3>Further Info {this.state.info}</h3>
        </h1>
      );
    }
    return this.props.children;
  }
}

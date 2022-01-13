import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";

export default class VirtualKeyboard extends Component {
  onChange = (input) => {
    console.log("Input changed", input);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  render() {
    return (
      <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        layout={{
          default: [
            "1 2 3 4 5 6 7 8 9 0 - = * / {bksp}",
            "sin cos tan sec cosec cot log ln e p [ ] \\",
            "( ) x c v b n m , . /",
            "{space}",
          ]
        }}
      />
    );
  }
}

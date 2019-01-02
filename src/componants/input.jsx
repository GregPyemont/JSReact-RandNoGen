import React, { Component } from "react";
import Counter from "./counter";

class Input extends Component {
  state = {
    value: ""
  };
  render() {
    return (
      <div>
        <h1>Roll between 1 and {this.state.value}</h1>
        <input onChange={e => this.setState({ value: e.target.value })} />
        <br />

        <Counter sides={this.state.value} />
      </div>
    );
  }
}

export default Input;

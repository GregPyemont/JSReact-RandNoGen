import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: Math.floor(Math.random() * this.props.sides + 1)
    });
  };

  render() {
    return (
      <React.Fragment>
        {/*<h1 className="title">D-{this.props.sides} Roll :</h1>*/}
        <h1>Answer:</h1>
        <h1 id="num">{this.state.count}</h1>
        <button
          id="bt"
          onClick={this.handleClick}
          className="btn btn-warning fs-40px"
        >
          <b>Roll!</b>
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;

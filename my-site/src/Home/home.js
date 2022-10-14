import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("inside:", this.state.count);
      }
    );
    console.log("outside:", this.state.count);
  };

  removeOne = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count - 1,
      }),
      () => {
        console.log("inside:", this.state.count);
      }
    );
    console.log("outside:", this.state.count);
  };

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.removeOne()}>Remove</button>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.addOne()}>Add</button>
        </div>
      </>
    );
  }
}

export default Home;

import React from "react";
class MyClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({
      brand: "Chegg",
      color: "green",
    });
  };

  render() {
    return (
      <div>
        <h1>
          hello world from MyComponent class having color {this.state.color}
        </h1>
        <button type="button" onClick={this.changeColor}>
          click me
        </button>
      </div>
    );
  }
}
export default MyClassComponent;

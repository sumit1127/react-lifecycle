import React from "react";

class GetDerivedStateFromProps extends React.Component {
  state = {
    money: 10,
    age: 10,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      money: 1000,
      age: 20,
    };
  }

  render() {
    return (
      <div>
        <p>You have {this.state.money}</p>
        <p>age : {this.state.age}</p>
      </div>
    );
  }
}

export default GetDerivedStateFromProps;

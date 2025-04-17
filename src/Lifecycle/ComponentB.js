import React from "react";

class ComponentB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "old heading",
    };
    console.log("Lifecycle A constructor");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount B");
    setTimeout(() => {
      this.setState({
        heading: "New heading",
      });
    }, 3000);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>{this.state.heading}</p>
      </div>
    );
  }
}

export default ComponentB;

import React from "react";

class ComponentA extends React.Component {
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
    console.log("componentDidMount A");
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

export default ComponentA;

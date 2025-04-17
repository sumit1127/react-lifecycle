import React from "react";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    console.log("constructor Lifecycle");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "jhdbckjdnk",
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Update;

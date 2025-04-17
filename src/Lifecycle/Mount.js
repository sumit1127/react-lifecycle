import React from "react";

class Mount extends React.Component {
  state = {
    character: {},
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => this.setState({ character: data }));
  }

  // anytime state or props change for a component the render method will run again

  render() {
    console.log("render");
    return (
      <div>
        <h5>{this.state.character.name}</h5>
      </div>
    );
  }
}

export default Mount;

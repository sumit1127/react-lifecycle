import React from "react";
import GetDerivedStateFromProps from "./Lifecycle/GetDerivedStateFromProps";
import Mount from "./Lifecycle/Mount";
import Update from "./Lifecycle/Update";
import ComponentA from "./Lifecycle/ComponentA";
import ComponentB from "./Lifecycle/ComponentB";
import Hero from "./Lifecycle/Hero";
import ErrorBoundary from "./Lifecycle/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Mount /> */}
        <Update />
        <GetDerivedStateFromProps />
        <ComponentA />
        <ComponentB />
        <Update />
        <ErrorBoundary>
          <Hero heroName={"superman"} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName={"Joker"} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName={"Batman"} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     console.log("Mount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return true;
//   }

//   componentDidUpdate(prev, prevState) {
//     console.log("update");
//   }

//   componentWillUnmount() {
//     console.log("Unmount");
//   }

//   render() {
//     const increment = () => {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     };

//     const decrement = () => {
//       this.setState({
//         count: this.state.count - 1,
//       });
//     };

//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={decrement}>Increment</button>
//       </div>
//     );
//   }
// }

// export default App;

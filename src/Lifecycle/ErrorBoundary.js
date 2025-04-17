import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err) {
    console.log("Error", err);
    // Update state to show fallback UI
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // Log error information, e.g., to a service
    console.log("Error - ComponentDidCatch", error);
    console.log("Error - desc", info);
  }

  render() {
    if (this.state.hasError) {
      // fallback ui
      return <h5>something went wrong</h5>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

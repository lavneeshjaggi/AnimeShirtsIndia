import React from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <img
            src="https://i.imgur.com/lKJiT77.png"
            alt="error"
            className="error-image"
          />
          <div className="error-image-text">A Dog Ate this Page</div>
          <div className="error-image-description">
            Your dog is cute but honestly a menace. Where are my shoes? Where is
            my graduation certificate? Where is the chocolate cake I baked for
            my Aunt’s birthday? And why did you take your dog to the vet on that
            same Thursday?!
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

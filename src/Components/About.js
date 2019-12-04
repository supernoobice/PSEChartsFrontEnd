import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="h3">About</h1>
        <p>Simple charts for the simple investor.</p>
        <p>
          This is a companion website for{" "}
          <a href="https://howtoinvestforbeginners.com">
            How to Invest for Beginners
          </a>
          , created by Wayne of{" "}
          <a href="https://www.youtube.com/channel/UCl6_bCFZlU94KdoLW3mL24A">
            Investing Philippines
          </a>
          .
        </p>
      </div>
    );
  }
}
export default About;

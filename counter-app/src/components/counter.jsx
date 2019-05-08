import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: [] };

  renderTags() {
    //if (this.stage.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create tags"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;

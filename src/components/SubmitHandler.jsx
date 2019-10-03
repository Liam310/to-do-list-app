import React, { Component } from "react";

class SubmitHandler extends Component {
  state = {
    newTask: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          NEW TASK JEEVES!
          <input onChange={this.handleInput} name="newTask" type="text" />
        </label>
        <button type="submit">Click It</button>
      </form>
    );
  }
  handleInput = event => {
    this.setState({ newTask: event.target.value });
  };
  handleSubmit = event => {
      event.preventDefault();
      this.props.addListItem(this.state.newTask);
  }

}

export default SubmitHandler;

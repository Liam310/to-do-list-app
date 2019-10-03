import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import StrikeHandler from './components/StrikeHandler';

class App extends Component {
  state = {
    toDoList: [
      { taskId: 1, task: 'Water flowers', strikeThrough: true },
      { taskId: 2, task: 'cancel Brexit', strikeThrough: false }
    ]
  };
  render() {
    const { toDoList } = this.state;
    return (
      <div className="App">
        <h1>To-do list:</h1>
        {/* <StrikeHandler toDoList={toDoList} /> */}
        <ToDoList toDoList={toDoList} strikeHandler={this.strikeHandler} />
      </div>
    );
  }

  strikeHandler = event => {
    console.dir(event.target);
  };
}

export default App;

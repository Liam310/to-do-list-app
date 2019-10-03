import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import SubmitHandler from "./components/SubmitHandler";

class App extends Component {
  state = {
    toDoList: [
      { taskId: 0, task: "Water flowers", strikeThrough: false },
      { taskId: 1, task: "cancel Brexit", strikeThrough: false }
    ]
  };
  render() {
    const { toDoList } = this.state;
    return (
      <div className="App">
        <h1>To-do list:</h1>
        <SubmitHandler addListItem={this.addListItem} />
        <ToDoList toDoList={toDoList} strikeHandler={this.strikeHandler} />
      </div>
    );
  }

  strikeHandler = event => {
    const index = event.target.id;
    this.setState(currentState => {
      const toDoCopy = [...currentState.toDoList];
      toDoCopy[index].strikeThrough = !toDoCopy[index].strikeThrough;
      return { toDoList: toDoCopy };
    });
  };

  addListItem = newTask => {
    this.setState(currentState => {
      return {
        toDoList: [
          ...currentState.toDoList,
          {
            taskId: currentState.toDoList.length,
            task: newTask,
            strikeThrough: false
          }
        ]
      };
    });
  };
}

export default App;

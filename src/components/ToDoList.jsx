import React from 'react';
import './toDoList.css';

const ToDoList = ({ toDoList, strikeHandler }) => {
  return <ul> { toDoList.map(({ taskId, task, strikeThrough }) => {
    return (
      <li onClick={strikeHandler} style={{cursor:'pointer'}} className={strikeThrough?'strike':'no-strike'} key={taskId} id={taskId}>
       {task}
      </li>
    );
  })} </ul>
};

export default ToDoList;

import React from 'react';
// import StrikeHandler from './StrikeHandler';

const ToDoList = ({ toDoList, strikeHandler }) => {
  return toDoList.map(({ taskId, task, strikeThrough }) => {
    return (
      <li onClick={strikeHandler} key={taskId}>
        {strikeThrough ? <strike>{task}</strike> : task}
      </li>
    );
  });
};

export default ToDoList;

import React from 'react';

const Todo = ({ todo, handleTodoClick, handleDeleteClick }) => {
  return (
    <div className='todo-container'>
      <div
        className={`todo ${todo.done ? "todo-done" : "todo-undone"}`} 
        onClick={() => handleTodoClick(todo.index)}>{todo.text}
      </div>
      <button className='todo-delete' onClick={() => handleDeleteClick(todo.index)}>X</button>
    </div>
  );
}

export default Todo;

import React from 'react';

const Todo = ({ todo, handleTodoClick }) => {
  return (
    <div className={`todo ${todo.done ? "todo-done" : "todo-undone"}`} onClick={() => handleTodoClick(todo.index)}>{todo.text}</div>
  );
}

export default Todo;

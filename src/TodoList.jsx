import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, handleTodoClick }) => {
  return (
    <div className="todo-list-container">
      {todoList.map(todo => <Todo key={todo.index} todo={todo} handleTodoClick={handleTodoClick} />)}
    </div>
  );
}

export default TodoList;

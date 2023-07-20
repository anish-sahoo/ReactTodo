import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list-container">
      {todoList.map((todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  );
}

export default TodoList;

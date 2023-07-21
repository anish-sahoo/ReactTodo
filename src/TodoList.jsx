import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, handleTodoClick, handleDeleteClick }) => {
  return (
    <div className="todo-list-container">{todoList.map(todo => <Todo 
        key={todo.index} 
        todo={todo} 
        handleTodoClick={handleTodoClick} 
        handleDeleteClick={handleDeleteClick}
      />)}
    </div>
  );
}

export default TodoList;

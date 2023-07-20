import React, { useState } from 'react';
import TodoList from './TodoList';
import './stylesheets/App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      const lastIndex = todoList[0]?.index || 0;
      setTodoList([{ index: lastIndex + 1, text: text, done: false }, ...todoList]);
      setText('');
    }
  }

  const handleTodoClick = (index) => {
    const todo = todoList.find(el => el.index === index);

    if (todo) {
      todo.done = !todo.done;
      setTodoList([...todoList]);
    }
  }

  return (
    <div className="container">
      <h1 className="header">My Todo List</h1>

      <input
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textbox"
        onKeyPress={(e) => handleEnterPress(e)}
      />

      {todoList.length > 0 ? (
        <TodoList todoList={todoList} handleTodoClick={handleTodoClick} />
      ) : (
        <div className="blank-well">
          No todo found
        </div>
      )}

    </div>
  );
}

export default App;

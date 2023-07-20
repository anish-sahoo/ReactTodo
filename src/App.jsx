import React, { useState } from 'react';
import TodoList from './TodoList';
import './stylesheets/App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      setTodoList([text, ...todoList]);
      setText('');
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

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

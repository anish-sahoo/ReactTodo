import React, { useState } from 'react';
import TodoList from './TodoList';
import TabList from './TabList';
import './stylesheets/App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      const lastIndex = todoList[0]?.index || 0;
      if(text.trim() !== "") {
        setTodoList([{ index: lastIndex + 1, text: text, done: false }, ...todoList]);
        setText('');
      }
    }
  }

  const handleTodoClick = (index) => {
    const todo = todoList.find(el => el.index === index);
    if(todoList.every(element => element.done === true)){
      console.log('Add confetti here');
    }
    if (todo) {
      todo.done = !todo.done;
      setTodoList([...todoList]);
    }
  }

  const handleDeleteClick = (index) => {
    console.log(`Element ${todoList[index]} at ${index} removed.`);
    todoList.splice(index, 1);
    setTodoList([...todoList]);
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

      <TabList/>

      {todoList.length > 0 ? (
        <TodoList todoList={todoList} handleTodoClick={handleTodoClick} handleDeleteClick={handleDeleteClick} />
      ) : ( <div className="blank-well">No todo found</div> )}
    </div>
  );
}

export default App;

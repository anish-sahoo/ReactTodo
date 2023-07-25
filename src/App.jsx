import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TabList from './TabList';
import './stylesheets/App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');
  const [displayTodoList, setDisplayList] = useState([]);

  useEffect(() => {
    if (selectedTab === 'done') {
      setDisplayList(todoList.filter(el => el.done));
    } else if (selectedTab === 'undone') {
      setDisplayList(todoList.filter(el => !el.done));
    } else {
      setDisplayList([...todoList]);
    }
  }, [selectedTab, todoList]);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      const lastIndex = todoList[0]?.index || 0;
      if(text.trim().length > 0) {
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
    setTodoList(
      todoList.filter(el => el.index !== index)
    );
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

      <TabList selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

      {displayTodoList.length > 0 ? (
        <TodoList
          todoList={displayTodoList}
          handleTodoClick={handleTodoClick}
          handleDeleteClick={handleDeleteClick}
        />
      ) : (
        <div className="blank-well">No todo found</div>
      )}
    </div>
  );
}

export default App;

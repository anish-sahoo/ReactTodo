import React, { useState } from 'react';
import TodoList from './TodoList';
import TabList from './TabList';
import './stylesheets/App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [displayTodoList, setDisplayList] = useState([]);
  const [text, setText] = useState('');
  
  const tabs_list = [ {text:'all', enabled:true}, 
                      {text:'undone', enabled:false}, 
                      {text:'done', enabled:false} ]
                      
  const [tabList, setTabList] = useState(tabs_list);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      const lastIndex = todoList[0]?.index || 0;
      if(text.trim().length > 0) {
        setTodoList([{ index: lastIndex + 1, text: text, done: false }, ...todoList]);
        setText('');
        setDisplayList([...todoList]);
        console.log(displayTodoList);
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

  const populateList = (tabName) => {
    if(tabName === 'Done'){

    }
    else if(tabName === 'Undone'){

    }
    else {
      
    }
  }

  const handleTabSelect = (value) => {
    const tab = tabList.find(item => item.text === value);
    
    if(!tab.enabled){
      tabList.map(item => (item.text === tab.text) ? item.enabled = true : item.enabled = false);
      setTabList([...tabList]);
      populateList(tab.text);
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

      <TabList tabList={tabList} handleClick={handleTabSelect}/>

      {todoList.length > 0 ? (
        <TodoList todoList={todoList} handleTodoClick={handleTodoClick} handleDeleteClick={handleDeleteClick} />
      ) : ( <div className="blank-well">No todo found</div> )}
    </div>
  );
}

export default App;

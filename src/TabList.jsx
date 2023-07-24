import React from 'react';
import Tab from './Tab';

const TabList = ({tabList, handleClick}) => {
  const tabs = [{text:'all', enabled:true}, {text:'undone', enabled:false}, {text:'done', enabled:false}];
  
  return (
    <div className="tab-list-container">
      {tabList.map(tab => <Tab 
        key={tab.text} 
        value={tab.text}
        enabled={tab.enabled}
        handleClick={handleClick} />)}
    </div>
  );
}

export default TabList;

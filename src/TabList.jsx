import React from 'react';
import Tab from './Tab';

const TabList = ({tabList, handleClick}) => {
  const tabs = [{text:'all', enabled:true}, {text:'undone', enabled:false}, {text:'done', enabled:false}];
  
  return (
    <div className="tab-list-container">
      {tabs.map(tab => <Tab 
        key={tabs.indexOf(tab)} 
        value={tab.text}
        enabled={tab.enabled}
        handleClick={handleClick} />)}
    </div>
  );
}

export default TabList;

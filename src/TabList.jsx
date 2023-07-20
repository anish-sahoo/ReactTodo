import React from 'react';
import Tab from './Tab';

const TabList = () => {
  const tabs = ['all', 'undone', 'done']

  return (
    <div className="tab-list-container">
      {tabs.map(tab => <Tab key={tab} value={tab} />)}
    </div>
  );
}

export default TabList;

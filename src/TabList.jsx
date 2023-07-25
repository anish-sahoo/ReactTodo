import React from 'react';
import Tab from './Tab';

const TabList = ({ selectedTab, setSelectedTab }) => {
  const TAB_LIST = ['all', 'undone', 'done']

  return (
    <div className="tab-list-container">
      {TAB_LIST.map(tabName => <Tab
        key={tabName}
        value={tabName}
        enabled={tabName === selectedTab}
        handleClick={setSelectedTab} />)}
    </div>
  );
}

export default TabList;

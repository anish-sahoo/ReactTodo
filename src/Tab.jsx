import React from 'react';

const Tab = ({ value }) => {
  return (
    <span className={`tab ${value === 'all' ? "active" : ""}`}>{value}</span>
  );
}

export default Tab;

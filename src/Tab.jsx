import React from 'react';

const Tab = ({ value, enabled, handleClick }) => {
  return (
    <span
      className={`tab ${enabled == true ? "active" : ""}`}
      onClick={() => handleClick(value)}
    >
      {value}
    </span>
  );
}

export default Tab;

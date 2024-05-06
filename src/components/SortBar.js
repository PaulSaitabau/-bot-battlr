import React from 'react';

const SortBar = ({ sortBots }) => {
 return (
    <div>
      <h3>Sort By:</h3>
      <button onClick={() => sortBots('health')}>Health</button>
      <button onClick={() => sortBots('damage')}>Damage</button>
      <button onClick={() => sortBots('armor')}>Armor</button>
    </div>
 );
};

export default SortBar;

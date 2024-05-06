import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots = [], handleClick, handleDischarge }) => {
  return (
    <div className="ui four column grid">
      {bots.length > 0 ? (
        bots.map(bot => (
          <div className="column" key={bot.id}>
            <BotCard
              bot={bot}
              handleDischarge={handleDischarge}
              handleClick={handleClick}
            />
          </div>
        ))
      ) : (
        <div className="row">No bots available</div>
      )}
    </div>
  );
};

export default BotCollection;

import React from 'react';
import BotCard from './BotCard';

export default function BotArmy({ bots = [], handleClick, handleDischarge }) {
  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
          {bots.length > 0 ? (
            bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                handleDischarge={handleDischarge}
                handleClick={handleClick}
              />
            ))
          ) : (
            <div className="column">No bots available</div>
          )}
        </div>
      </div>
    </div>
  );
}

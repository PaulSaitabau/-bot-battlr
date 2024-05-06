import React from 'react';

const BotSpecs = ({ bot, enlistBot }) => {
 return (
    <div>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
 );
};

export default BotSpecs;

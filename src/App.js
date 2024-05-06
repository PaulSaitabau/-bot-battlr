import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';

export default function App() {
  const botsAPI = 'https://bots-taupe.vercel.app/bots';
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  function fetchBots() {
    fetch(botsAPI)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch bots');
        }
        return res.json();
      })
      .then(data => {
        setBots(data);
        setEnlistedBots(data.filter(bot => bot.isEnlisted));
      })
      .catch(error => console.error(error));
  }

  function enlistBot(id) {
    setEnlistedBots([...enlistedBots, bots.find(bot => bot.id === id)]);
    setBots(bots.map(bot => (id === bot.id ? { ...bot, isEnlisted: true } : bot)));
  }

  function delistBot(id) {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
    setBots(bots.map(bot => (id === bot.id ? { ...bot, isEnlisted: false } : bot)));
  }

  function dischargeBot(id) {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
    setBots(bots.filter(bot => bot.id !== id));
  }

  return (
    <div>
      <BotArmy bots={enlistedBots} handleDischarge={dischargeBot} handleClick={delistBot} />
      <BotCollection bots={bots} handleDischarge={dischargeBot} handleClick={enlistBot} />
    </div>
  );
}

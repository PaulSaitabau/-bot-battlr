import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';


export default function App() {
  const botsAPI = 'https://bots-taupe.vercel.app/bots'
  const [bots, setBots] = useState([]);



  useEffect(() => {
    fetch(botsAPI)
    .then(res => res.json())
    .then(setBots)
  }, []);

  function enlistBot(id) {
    setBots(bots.map(bot => id === bot.id ? {...bot, isEnlisted: true} : bot));
  }
  

  function delistBot(id) {
    setBots(bots.map(bot => id === bot.id ? {...bot, isEnlisted: false} : bot));
  }
  
  function dischargeBot(id) {
    setBots(bots.filter(bot => bot.id === id ? false : true));
  }

  return (
    <div>
      
      <BotArmy bots={bots.filter(bot => bot.isEnlisted)} handleDischarge={dischargeBot} handleClick={delistBot} />
      <BotCollection bots= {bots}  handleDischarge={dischargeBot} handleClick={enlistBot}/>
     
    </div>
  );
}
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch bots data here
  }, []);

  const enlistBot = botId => {
    // Fetch bot data by ID and then enlist
  };

  const releaseBot = botId => {
    setArmy(army.filter(b => b.id !== botId));
  };

  // Placeholder for sorting logic
  const sortBots = () => {
    // Implement sorting logic here
  };

  return (
    <Router>
      <div>
        <SortBar sortBots={sortBots} />
        <Link to="/"><h1>Bot Battlr</h1></Link>
        <Switch>
          <Route exact path="/">
            <BotCollection bots={bots} enlistBot={enlistBot} />
          </Route>
          <Route exact path="/army">
            <YourBotArmy army={army} releaseBot={releaseBot} />
          </Route>
          <Route path="/bots/:botId">
            <BotSpecs enlistBot={enlistBot} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

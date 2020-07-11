import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
    <h1>T-SHIRTS</h1>
  </div>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
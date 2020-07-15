import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/jackets' component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
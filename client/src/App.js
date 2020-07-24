import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign-in/sign-in.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} /> 
        <Route path='/signin' component={SignIn} /> 
      </Switch>
    </div>
  );
}

export default App;
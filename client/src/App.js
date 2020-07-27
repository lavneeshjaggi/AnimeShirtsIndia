import React from 'react';
import axios from 'axios';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign-in/sign-in.component'; 
import SignUp from './pages/sign-up/sign-up.component'; 

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn = async () => {
    const response = await axios.get('/authenticated');

    if (response.data.user) {
      this.setState({
          loggedIn: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} /> 
          <Route path='/signin' component={SignIn} /> 
          <Route path='/signup' component={SignUp} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
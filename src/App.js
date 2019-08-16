import React, { Component } from 'react';
//import Nav from './Nav';
import LandingPage from './LandingPage';
import ReturningUserPage from './ReturningUserPage';
import HomePage from './HomePage';
import NewMessagePage from './NewMessagePage';


class App extends Component {
  render() {
    return (
      <div className='App'>
         <HomePage />
         <LandingPage />
         <NewMessagePage />
         <ReturningUserPage />
      </div>
    )
  }
  
}

export default App;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import Nav from './Nav';
import LandingPage from './LandingPage';
import ReturningUserPage from './ReturningUserPage';
import MessageBoard from './MessageBoard';
import NewMessagePage from './NewMessagePage';
import NotFoundPage from './NotFoundPage';


class App extends Component {
  render() {
    return (
      <div className='App'>
         <main>
            <Switch>
              <Route exact path= '/' component={LandingPage} />
              <Route path= '/messageboard' component={MessageBoard} />
              <Route path= '/returninguser/:userId' component={ReturningUserPage} />
              <Route path= '/newmessage' component={NewMessagePage} />
              <Route component={NotFoundPage} />
           </Switch>
         </main>
      </div>
    )
  }
  
}

export default App;
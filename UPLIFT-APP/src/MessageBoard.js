import React, { Component } from 'react';
import Nav from './Nav';


class MessageBoard extends Component {
    render() {
      return (
        <div>
          <Nav />
          
          <header role="banner">
            <h1>Message Board</h1>
          </header>

          <button type="submit">Read Another Note</button>
          
          <p>Interested in leaving a note for someone to read? Sign up below</p>
          <button type="submit">signup</button>
        </div>
      )
    }
}

export default MessageBoard;
import React, { Component } from 'react';
import Nav from './Nav'


class ReturningUserPage extends Component {
    render() {
      return (
        <div>
          <Nav />
          
          <header role="banner">
            <h1>Welcome Back, (USER NAME)</h1>
          </header>

          <section id="msg-list">
            <div class="container">
              <p>Positive Message #1</p>
              
            </div>
          
          
          </section>


        </div>
      )
    }
}

export default ReturningUserPage;
import React, { Component } from 'react';
import Nav from './Nav';



class LandingPage extends Component {
    render() {
      return (
        <div>
          <Nav />
          <header role="banner">
            <h1>Uplift</h1>
            <h2>Spreading Positivity Through Technology</h2>
          </header>
          <section>
            <h3>Why Uplift?</h3>
            <p>We're all too aware of the uglier side of social media and the internet at large. 
               Look at any the comments of any website and you're bound to find negativity. 
               Phrases like 'cyberbullying' and 'fat shaming' have become unwelcomed parts of our collective lexicon. 
               Well, this website wants to do something about that.
               Think of Uplift as crowdsourced positivity.
            </p>
          </section>
          <section>
            <h3>How It Works</h3>
            <p>Anyone can come to Uplift and read words of encouragement, motivation, or inspiration left by other users.
               If you want to post messgaes for others to read, you have to sign up.
            </p>
          </section>
          <section>
             <form class='signup-form'>
            <div>
              <label for="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
             </form>
          </section>

          
          
        </div>
      )
    }
}

export default LandingPage;
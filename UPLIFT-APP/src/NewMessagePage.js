import React, { Component } from 'react';
import Nav from './Nav';
//import './NewMessagePage.css';


class NewMessagePage extends Component {
    render() {
      return (
        <div>
          <Nav />
          <header>
            <h1>Write A New Message</h1>
          </header>

          <section>
             <textarea name="new-msg" rows="10" columns="15" required></textarea>
          
             <label>How do you want to sign this message?</label>
             { /*<<div class="dropdown">
               <button onclick="myFunction()" class="dropbtn"></button>
               { /*<div id="myDropdown" class="dropdown-content">
                 <a href="#">anonymous</a>
                 <a href="#">social media</a>
                 <a href="#">actual name</a>
               </div>
               </div> */}
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
             
          </section>

          
          

        </div>
      )
    }
}

export default NewMessagePage;
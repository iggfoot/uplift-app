import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {
   render() {
     return (
        <div className="dropdown">
           { /*<a href="#home">Home</a>
             <a href="#news">News</a> */ }
           <div class="dropdown">
              <button class="dropbtn">Dropdown 
                 <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                 <Link to='/messageboard'>Message Board</Link>
                 <Link to='/returninguser/:userId'>Returning User Home</Link>
                 <Link to='/newmessage'>Post a New Message</Link>
              </div>
           </div> 
        </div>
        )
    }
}
export default Nav;
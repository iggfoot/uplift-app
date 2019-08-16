import React from 'react';
import Content from './content'
class Nav extends Component {
    render() {
        return (
          <Content className='Nav'>
            <a href='/'>
              Home
            </a>
            <a href='/about'>
              About
            </a>
            <a href='/workouts'>
              Workouts
            </a>
          </Content>
        )
      }
    }  
export default Nav;
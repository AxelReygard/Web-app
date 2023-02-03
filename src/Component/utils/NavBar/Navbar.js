import React from 'react'
import './Navbar.scss'
import { NavItem } from '../Util';


function NavBar() {
 return (
      <div className="Container">
        <ul>
              <NavItem goto="#Home">Home</NavItem>
          </ul>
      </div>
)
};



export default NavBar;

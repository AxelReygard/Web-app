import React from 'react';
import { NavBar, Logo } from '../Componen';
import "./header.scss" 


function Header() {
  return (<>
      <div className="container">
        <div className="container-wrapper">
          <div className="logos">
                  <Logo name="AxelRey"/>
          </div>
          <div className='Navigasi'>
              <NavBar untuk= "#Home" >Home</NavBar>
              <NavBar untuk= "#About" >About</NavBar>
          </div>
          </div>
      </div>
  </>)
};

export default Header;
import React from 'react';
import { NavBar, Logo } from '../Componen';
import "./header.scss" 


function Header() {
  return (<>
      <header>
        <div className="container-wrapper">
          <div className="logos">
                  <Logo name="AxelRey"/>
          </div>
          <div className='Navigasi'>
                <NavBar/>
          </div>
          </div>
      </header>
  </>)
};

export default Header;
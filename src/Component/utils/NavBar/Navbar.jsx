import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.scss'


function NavBar( props ) {
 return (
      <div className="Container">
        <ul>
          <li>
                <Link to={`/${props.untuk}`} ><h3>{props.name}</h3></Link>
            </li>
          </ul>
      </div>
)
};



export default NavBar;

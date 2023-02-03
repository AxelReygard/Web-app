import React from 'react'
import { Link } from 'react-router-dom'
import './Navitem.scss'


function NavItem({goto, name}) {
    const gotos = goto;
  return (
    <li>
        <Link to={`/${gotos} `}>{name}</Link>
    </li>
  )
}


export default NavItem;

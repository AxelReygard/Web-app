import React from 'react'
import './Navitem.css'


const NavItem = (props)=>{
    //const gotos = goto;
  return (
    <>
    <li>
        <a href={`${props.gotos}`}>{props.name}</a>
    </li>
  </>)
}


export default NavItem;

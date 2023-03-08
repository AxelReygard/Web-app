import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { NavItem } from '../Util';
import {FaBars, FaTimes} from 'react-icons/fa'


function NavBar() {
    let [click, setClick] = useState(false);
    const fontUk= '1.5rem'
    function handleClick (){
      setClick(!click)
    }
 return (
      <nav>
        <span className={click !== true ? "menu" : "unactive"} onClick={handleClick} >{click !== true ? <FaBars fontSize={fontUk}/> : ''}</span>
        <ul className={click === true ? 'item' : 'unactive'}>

            <span className={click === true ? "menuClose" : "unactive"} onClick={handleClick}>{click !== false ? <FaTimes fontSize={fontUk}/> : ''}</span>

            <NavItem gotos="#Home" name="Home"/>
            <NavItem gotos="#About" name="About"/>
            <NavItem gotos="#Portofolio" name="Portofolio"/>
            <NavItem gotos="#Galery" name="GalerryMe"/>
            <NavItem gotos="#Skill" name="Skill"/>
            <NavItem gotos="#Blog" name="Blog"/>
          </ul>
      </nav>
      
)
};





export default NavBar;

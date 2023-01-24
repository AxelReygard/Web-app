import React from 'react'
import Nav from './Nav'
import Button from './utils/Buttons'

function Header() {
  return (<>
    <Nav />
    <Button 
    placeHolder='this place holder'
    className='bg-green-500'
    names="Confirm"
    />  

  </>)
};

export default Header;
import React from 'react'
import "./logo.scss"

function Logo( props ) {
  return (
  <>
    <div className='Container'>
        <h1>{ props.name }</h1>
    </div>
  </>
  )
}

export default Logo;
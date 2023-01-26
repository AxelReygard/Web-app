import React from 'react'
import "./btn.scss"

function Btn(action, name) {
  const names = name;
  const actions = action;
  return (
    <button {...actions}>
          {names}
    </button>
  )
}

export default Btn
import React from 'react'


export default function Nav({props}) {
  return (<>
    <span className="max-w-full bg-indigo-400">
        <div id="logo" className='h-auto w-auto'>
            <h1 >{props.judul}</h1>
          </div>
        <ul id='nav' className='h-6 w-10'>
            <li>{props.name1}</li>
            <li>{props.name2}</li>
            <li>{props.name3}</li>
            <li>{props.name4}</li>
            <li>{props.name5}</li>
        </ul>
    </span>
    </>)
};

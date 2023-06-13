import React from 'react'
import './Page.css'
const PopUp = ({onTitle, onMessage, trigger}) => {
  return (
    <div>
    <div className='overlay' onClick={trigger}></div>
    <div className='holy'>
      <div>
      <h3>{onTitle}</h3>
      </div>
      <p>{onMessage}</p>
        <button onClick={trigger}>Okay</button>
    </div>
    </div>
  )
}

export default PopUp

import React from 'react'

import onlineIcon from './onlineIcon.png'
import closeIcon from './closeIcon.png'

import './InfoBar.css'

const InfoBar = (props) => {
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <img className='onlineIcon' src={onlineIcon} alt='online icon' />
      <h3>{props.room}</h3>
    </div>
    <div className='rightInnerContainer'>
      <a href='/'>
        <img src={closeIcon} alt='close icon' />
      </a>
    </div>
  </div>
}

export default InfoBar
import React from 'react'
import './PersonItem.css';

import redLed from '../../../assets/offline-led.png';
import greenLed from '../../../assets/online-led.png';


export default function PersonItem(props) {
    const { id, name, status, floor, uptime } = props.person;
  return (
    <div className='PersonItem'>
        <div className='PersonItem-id'>{id}</div>
        <div>{name}</div>
        <div className='PersonItem-status'><span>{status === 'on' ? <img src={greenLed} alt='ON'/> : <img src={redLed} alt='OFF'/>}</span></div>
        <div>{floor}</div>
        <div>{uptime}</div>
    </div>
  )
}

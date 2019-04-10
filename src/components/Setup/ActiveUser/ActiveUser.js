import React from 'react';
import './ActiveUser.css';

export default function ActiveUser(props) {
    const { active } = props;
  return (
    <div className='ActiveUser'>
        <span>#{active.id}</span>
        <span>{active.name}</span>
        <span>#{active.harness}</span>
        <button className='button edit' onClick={() => props.editWorkerDetails(active.uniqueID, active.id, active.name, active.harness)}>Edit</button>
        <button className='button remove' onClick={() => props.unactiveWorker(active.id)}>Offline</button>
    </div>
  )
}

import React from 'react';
import './Setup.css';
import networking from '../../assets/networking.png';

// Redux & Stuff.
import { connect } from 'react-redux';
import { setupInputChange, activateWorker, unActivateWorker, editWorkerDetails } from '../../store/actions';

// Components.
import ActiveUser from './ActiveUser/ActiveUser';

const Setup = (props) => {
    const { listOfActivated, newWorker, setupMode } = props.setup;
  return (
    <div className='Setup'>
        <div className="Setup_dash">
            <h3>Setup Dashboard</h3>
            <div className="setup_workers">
                <div className="setup_workers-listOfWorkers-container">
                <h4>List Of Workers</h4>
                <div>
                    <div className="setup_workers-listOfWorkers-head">
                        <span>ID</span>
                        <span>Name</span>
                        <span>harness</span>
                    </div>
                    {
                        listOfActivated.map((active, i) => (
                            <ActiveUser 
                                key={i} 
                                active={active} 
                                unactiveWorker={props.unActivateWorkerHandler.bind(this)}
                                editWorkerDetails={props.editWorkerDetailsHandler.bind(this)}
                            />
                        ))
                    }
                </div>
                </div>
                <div className="setup_workers-newWorker">
                    <img src={networking} alt="networking"/>
                    <h4>Worker Profile</h4>
                    <p>Enter Worker ID & Full name for activation</p>
                    <input 
                        type="text"
                        className="id"
                        placeholder='Worker ID'
                        value={newWorker.id}
                        onChange={(e) => props.setupInputChangeHandler(e.target.className, e.target.value)}
                        />
                    <input 
                        type="text"
                        className="name"
                        placeholder='Worker Fullname'
                        value={newWorker.name}
                        onChange={(e) => props.setupInputChangeHandler(e.target.className, e.target.value)}
                        />
                    <input 
                        type="text"
                        className="harness"
                        placeholder='harness ID'
                        value={newWorker.harness}
                        onChange={(e) => props.setupInputChangeHandler(e.target.className, e.target.value)}
                        />     
                
                    <button 
                        className={ setupMode==='create' ? null : 'edit-mode' }
                        onClick={() => props.activateWorkerHandler(newWorker.uniqueID, newWorker.id, newWorker.name, newWorker.harness)}>
                        { setupMode === 'create' ? 'Go Online' : 'Confirm' }
                    </button>
            
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        setup : state.setup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setupInputChangeHandler : (field, content) => dispatch(setupInputChange(field, content)),
        activateWorkerHandler : (uniqueID, id, name, harness) => dispatch(activateWorker(uniqueID, id, name, harness)),
        unActivateWorkerHandler : (id) => dispatch(unActivateWorker(id)),
        editWorkerDetailsHandler : (uniqueID, id, name, harness) => dispatch(editWorkerDetails(uniqueID, id, name, harness))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
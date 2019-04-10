import React from 'react';
import './System.css';

import { connect } from 'react-redux';

// Components
import PersonItem from './PersonItem/PersonItem';

const System = (props) => {
    const { people } = props.system;
  return (
    <div className='System'>
        <div className="System_table">
            <div className="System_table-head">
                <div>ID</div>
                <div>FullName</div>
                <div>Status</div>
                <div>Floor</div>
                <div>UpTime</div>
            </div>
            <div className="System_table-body">
                {
                    people.map((person, i) => (
                        <PersonItem key={i} person={person} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        system : state.system
    }
}


export default connect(mapStateToProps)(System)
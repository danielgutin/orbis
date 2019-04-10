import React from 'react';
import './SideNav.css';

// Components
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <div className='SideNav'>
        <div className="SideNav-logo"></div>
        <div className="SideNav_menu">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/setup'><li>Setup</li></Link>
                <Link to='/statistics'><li>Statistics</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </div>
        <div className="SideNav_contact">
            <p>Made By Sharon Nemi & Mark Dicky</p> 
            <i className="fab fa-youtube"></i><span>Explaintion Video</span>
        </div>
    </div>
  )
}
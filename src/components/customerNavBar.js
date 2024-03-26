import React from 'react';
import { Link } from 'react-router-dom';
import "./CustomerNavBar.css";

const CustomerNavBar = () => {
  return (
    <div className='customerNavBar navbar navbar-expand-lg '>
      <div className="container">
        
        <Link className='nav-link ' to="/create-issue"> <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>Create Issue</a></Link>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link font-bold' to="/view-customer">View Profile</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link font-bold' to="/update-customer">Update Profile</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link font-bold' to="/App">Log Out</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default CustomerNavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import "./OperatorNavBar.css";

const OperatorNavBar = () => {
  const handleLogOut = () => {
    sessionStorage.clear();
    window.location = "/";
  }

  return (
    <div className='operatorNavBar'>
      <nav>
        <ul>
          <li className='font-bold'><Link to="/operator" className='linkTag'>Home</Link></li>
        </ul>
        <ul className='logOutDiv'>
          <li className='font-bold'><Link to="/change-password" className='linkTag'>Change Password</Link></li>
          <li className='font-bold logOutBtn' onClick={handleLogOut}>Log Out</li>
        </ul>
      </nav>
    </div>
  )
}

export default OperatorNavBar;

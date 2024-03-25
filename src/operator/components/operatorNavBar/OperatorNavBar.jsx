import React from 'react'
import { Link } from 'react-router-dom';
import "./OperatorNavBar.css"
import toast from 'react-hot-toast';


const OperatorNavBar = () => {
 
  return (
    <div className='operatorNavBar' >
        <nav > 
            <ul>
                <li className='font-bold'> <Link to="/operator">Home</Link></li>
            </ul>
            <ul className='logOutDiv'>
                <li className='font-bold' ><Link to="/change-password" >Change Password</Link></li>
                <li className='font-bold' >Log Out</li>
            </ul>
        </nav>
        
    </div>
  )
}

export default OperatorNavBar
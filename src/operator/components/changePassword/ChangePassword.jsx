import React, { useState } from 'react'
import "./ChangePassword.css"
import OperatorService from '../../services/OperatorService';
import toast from 'react-hot-toast';

const ChangePassword = () => {


const id=sessionStorage.getItem('id');
const [passwordData,setPasswordData]=useState({
  oldPassword:"",
  newPassword:"",
  operatorId:id
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setPasswordData({ ...passwordData, [name]: value });
}

const handleSubmit=async(e)=>{
  e.preventDefault()
  if(passwordData.oldPassword==passwordData.newPassword){
    toast.error("New Password is same as Old Password")
    return;
  }
  try {
    const response = await OperatorService.changePassword(passwordData);
    console.log(response);
    toast.success(response.data)
    setPasswordData({
      oldPassword:"",
      newPassword:"",
      operatorId:id
    })
   
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
  }

}


  return (
    <div className='changePassword' >
        <form onSubmit={handleSubmit} className='changePasswordDiv'  >
        <div className='passwordDiv' >
          <label  >Old Password</label>
          <input type="password" name='oldPassword' value={passwordData.oldPassword} onChange={handleChange} required className='inputBox' />
        </div>
        <div  className='passwordDiv'>
          <label>New Password</label>
          <input type="password" name='newPassword' value={passwordData.newPassword} onChange={handleChange} required className='inputBox'/> 
        </div>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default ChangePassword
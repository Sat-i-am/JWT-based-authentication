import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { deleteUserRoute } from '../Apiroutes';

export default function Deleteuser() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  if( !token )
    navigate('/login');
  
  const handleDelete = async(e)=>{
    const response = await axios.post(deleteUserRoute,null,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
      
    });
    console.log(response.data);
    if(response.data.status === true)
    {
      console.log("user deleted")
      localStorage.removeItem('token');
      navigate('/register');
    } 
    else  
      console.log(response.data.msg);
      console.log(response.err)
  }
  return (
    <div>
        <button onClick={handleDelete}>delete this account</button>
    </div>
  )
}

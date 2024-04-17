import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { deleteUserRoute } from '../Apiroutes';
import Logout from './Logout';

export default function Secretpage() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(()=>{ //if user is not logged in dont stay on this route and go to login
        if(!token)
        navigate('/login');
    },[])
    
    const handleLogout = async()=>{ //for logout we will just delete the token form the local storage
        localStorage.removeItem('token'); //once token is deleted, no request will be fulfilled in backend cause authorization will be failed without token
        navigate('/login')
    }
    const opendeleteform = ()=>{
        navigate('/delete')
    }
  return (
    <div>
        this page is confidential
        <Logout logoutFunction={handleLogout}></Logout>
        <button onClick={opendeleteform}>click here to go to delete user</button>
        
    </div>
  )
}

import React, { useEffect } from 'react'
import Logout from './Logout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { logoutRoute } from '../Apiroutes';

export default function Home() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(()=>{
      if(!token)
        navigate('/login');
    })
    const handlesecretpage = ()=>{
        navigate('/secretpage')
    }
  return (
    <div>
        welcome to the home page
        <button onClick={handlesecretpage}>secretpage</button>
       
    </div>
  )
}

import React, { useState } from 'react'
import { registerRoute } from '../Apiroutes';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

export default function Myregister() {
    
    const [User,setUser] = useState({
        username: '',
        password: '',
    })
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setUser({...User,[e.target.id]:e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await axios.post(registerRoute,User);
        console.log(response.data.dbUser);
        if(response.data.status === false)
            alert('User already exists');
        
        else
        {    
            alert('registered successfully')
            navigate('/login') //after registering we send user to login where we will generate a jwt token for further usage
        }
    }
    
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor='username'>enter username</label>
            <input type='text' placeholder='username' id='username' onChange={(e)=>handleChange(e)}></input>
            <label htmlFor='password'>enter password</label>
            <input type='password' placeholder='password' id='password' onChange={(e)=>handleChange(e)}></input>
            <button type='submit'>submit</button>
        </form>        
    </div>
  )  
}

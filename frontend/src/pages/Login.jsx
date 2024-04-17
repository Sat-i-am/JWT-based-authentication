import React, { useState } from 'react'
import { loginRoute } from '../Apiroutes';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

export default function Login() {

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
        const response = await axios.post(loginRoute,User);

        if(response.data.status === false)
            alert(`${response.data.msg}`);    

        else { //if logged in succefully
            console.log("this is response data",response.data);
            const {token} = response.data; //destructuring the token from the response and storing it in localstorage
            // console.log(`this is token ${token}`);
            localStorage.setItem('token',token);
            alert(response.data.msg)
            navigate('/home')
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

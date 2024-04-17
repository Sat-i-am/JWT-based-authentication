import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Firstpage() {
    const navigate = useNavigate();
    const gotoLogin=()=>{
        navigate('/login')
    }
    const gotoRegister=()=>{
        navigate('/register')
    }
  return (
    <div>
        <button onClick={gotoRegister}>register</button>
        <button onClick={gotoLogin}>login</button>
    </div>
  )
}

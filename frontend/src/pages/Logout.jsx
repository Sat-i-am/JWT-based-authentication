import React from 'react'
export default function Logout(prop) {
    
  return (
    <div>
        <button onClick={prop.logoutFunction}>logout</button>
    </div>
  )
}

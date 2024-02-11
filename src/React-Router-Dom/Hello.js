import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Hello = () => {
    const locate=useLocation();
    const navigate=useNavigate();
    console.log("user",locate);
    const send=()=>{
        navigate("/page")
    }
  return (
    <div>
        <h1>page 1</h1>
        <button onClick={send}>Send</button>
    </div>
  )
}

export default Hello
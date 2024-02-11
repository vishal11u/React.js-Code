import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hello2 = () => {
    const user = {
        name: "rajesh",
        age: 30,
        city: "Bangalore"
    };

    const navigate = useNavigate();
    const handlesubmit = () => {
        navigate("/", { state: user })
    }
    return (
        <div>
            <h1>Page2</h1>
            <button className='border' onClick={handlesubmit}>Send</button>
        </div>
    )
}

export default Hello2;
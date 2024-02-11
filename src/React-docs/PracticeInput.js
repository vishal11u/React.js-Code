// import React from 'react'
// import './Input.css'

// function PracticeInput()  {
//   const display=()=>{
//     console.log(display);
// }
//   return (
//     <div className='container'>
//         <h1 id='h-1'>Login/Sign Here</h1>
//         <input type='text'name='username' placeholder='User Name...' id='Text-10'></input>
//         <br/><br/>
//         <input type='email' name='emailId' placeholder='Email id...' id='Text-1'></input>
//         <br/><br/>
//         <input type='text' name='mobileno' placeholder='Mobile No...' id='Text-1'></input>
//         <br/><br/>
//         <input type='password'name='password' placeholder='Password...' id='Text-1'></input>
//         <p id='forgot-password'><u>Forgot password</u></p><br/>
//         <button type='button' id='btn' onClick={display()}>Submit Here</button>
//     </div>
//   )
// }

// export default PracticeInput;
import React from "react";

export default function App() {
  const[change,setChange]=React.useState()
  const  handleChange=(e)=>{
        console.log(e.target)
        setChange(change,{[e.target.value]:e.target.name})
  }
  const submit=()=>{
      setChange(change)
  }
  return (
    <div className="App" style={{backgroundColor:"gray",height:"200px"}}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" placeholder="Enter Name" onChange={handleChange} style={{border:"2px solid black"}}></input>
      <button type="button" onClick={submit} style={{marginLeft:"10px",borderRadius:"5px"}}>Submit</button>
      <p>{change}</p>
    </div>
  );
}
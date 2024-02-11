import React from 'react'
import './App.css'
// 


function Clone() {
    const[state,setState]=React.useState('');

    const ChangeInput =(e)=>{
        setState(e.target.value);
    }



    const display=()=>{
        console.log(display)
    }
    



    // const userObj={
    //     "firstname":"",
    //     "middlename":"",
    //     "lastname":""    
    // }

    // const[user,setUser]=React.useState(userObj);

    // const handlechange=(e)=>{
    //     console.log(e.target);
    //     setUser({...user,[e.target.name]:e.target.value})
    // }

    // const display=()=>{
    //     console.log(user)
    // }
  

  return (
    <div>
        {/* <h1>Form</h1>
        <input type='text' name='firstname' placeholder='First Name' onChange={handlechange} />
        <br/><br/>
        <input type='text' name='middlename' placeholder='Middle Name' onChange={handlechange}  />
        <br/><br/>
        <input type='text' name='lastname' placeholder='Last Name' onChange={handlechange}  />
        <br/><br/>
        <button type='button' onClick={display}>Submit here</button>
        <AppBar/> */}

        <input type='text' name='name' placeholder='name' onChange={ChangeInput}/>
        <button type='button' onClick={display} >Click</button>
        <p>{state}</p>
    </div>
  )
}

export default Clone
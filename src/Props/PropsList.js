import React from 'react'
import './PropList.css'

function PropsList(){
    const userInitialize={
        "firstName":'',
        "lastName":'',
        "age":'',
        "city":''
    }

    const[userList,setUserList]=React.useState([])
    const[userObj,setUserObj]=React.useState(userInitialize)

    const handleInput=(event)=>{
        setUserObj({...userObj,[event.target.name]:event.target.value})
    }

    const addToList=()=>{
        setUserList([...userList,userObj])
    }

    return(
        <div>
            <h1>Props List Demo</h1>
            <input type='text' id='firstname' placeholder='First Name...' name='firstName' onChange={handleInput}/>
            <input type='text' id='firstname' name='lastName' placeholder='Last Name...' onChange={handleInput}/>
            <input type='text' id='firstname' name='age' placeholder='Age...' onChange={handleInput}/>
            <input type='text' id='firstname' name='city' placeholder='City...' onChange={handleInput}/>
            <button type='button'id='btn' onClick={addToList}>Add</button>
            <DisplayList userList={userList}/>
        </div>
    )
}

function DisplayList(props){

    return(
        <div>
            <table id='t-1' border={1}>
               <tr id='t-1'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>City</th> 
               </tr>
               <tr id='t-1'>
                 {props.userList.map((user)=>(
                    <td>{user.firstName }</td>
                    ))}
                    {props.userList.map((user)=>(
                    <td>{user.lastName }</td>
                    ))}
                    {props.userList.map((user)=>(
                    <td>{user.age }</td>
                    ))}
                    {props.userList.map((user)=>(
                    <td>{user.city }</td>
                    ))} 
               </tr>
            </table>
        </div>
    )
}


export default PropsList





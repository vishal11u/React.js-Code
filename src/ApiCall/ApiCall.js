import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiCall(){

    const[userList,setUserList]=useState() 
    const[user,setuser]=useState([]);

    const display=(e)=>{
         setuser(e.target.value)
    }

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users",)
        .then((response)=>response.data)
        .then(res=>{
            console.log(res)
            setUserList(res)
        })
    },[])

    return(
        <div>
            <h1>API Call</h1>
            <input type="text" name="username" onChange={display} />
            <p>{user}</p>
            <ul>
                {
                  userList &&  userList.map((user)=>(
                        <li>{user.username}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ApiCall
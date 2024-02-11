import React from 'react'
import axios from 'axios'

function Postdata() {
    const  postObj={
        "name":"",
        "username":""
        }

    const[data,setdata] = React.useState(postObj)
    const [post, setpost] = React.useState(null)
 
  const senddata=()=>{
    axios.post("https://jsonplaceholder.typicode.com/users",data)
    .then((Response)=>Response.data)
    .then(res=>{
          setpost(res)
        console.log(res)
    })
  }

  const Handlechange=(event)=>{   
   setdata({...data,[event.target.name]:event.target.value})
  
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>Post Data Using Axois</h1>
        <input type="text" name='name' placeholder='Name' onChange={Handlechange}/><br />
        <input type="text"name='username' placeholder='username'onChange={Handlechange} /><br />
        <button type='button' onClick={senddata}>Send Data</button>

        <p>Generated id:{post ?post.id:""}</p>
      
    </div>
  )
}

export default Postdata;
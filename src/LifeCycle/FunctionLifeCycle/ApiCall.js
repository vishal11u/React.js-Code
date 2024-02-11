import React, { useEffect, useState } from 'react';

const ApiCall = () => {
  const initialUserData = {
    "name": ""
  };

  const [user, setUser] = useState([]);
  const [data, setData] = useState(initialUserData);

  useEffect(() => {
    console.log("Pass");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(res => {
        setUser(res);
      })
  }, []);

  const dataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const sendData = () => {
    setUser([...user, data]);
    setData(initialUserData);
    console.log(data)
  }

  const border = {
    border: "1px solid black",
    margin: "2rem"
  }

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <input style={border} type='text' name='name' placeholder='Enter Name' onChange={dataChange} value={data.name} />
      <button style={border} type='button' onClick={sendData}>Submit</button>
      <ul className=''>
        {
          user.map((item, index) => (
            <li key={index}>{item.id}) {item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ApiCall;

import React, { useState, useEffect } from 'react';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => alert('Error fetching data:', error));
  }, []);

  const style={
    border:"1px solid black"
  }

  return (
    <center>
      <div>
        <h2>User Table</h2>
        <table style={style}>
          <thead>
            <tr  style={style}>
              <th style={style}>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id} style={style}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></center>
  );
}

export default DataTable;
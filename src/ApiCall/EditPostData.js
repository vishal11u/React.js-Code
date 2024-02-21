import React from 'react';
import axios from 'axios';

function PostData() {
  const [data, setData] = React.useState({
    departmentCode: '',
    nameofDepartment: '',
    noofStudent: '',
  });
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState('');

  const sendData = async () => {
    try {
      const response = await axios.post("http://:5001/api/collegee/savedepartment", data);
      setPost(response.data);
      setError('');
    } catch (err) {
      setError('Failed to send data. Error: ' + err.message);
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post Data Using Axios</h1>
      <input
        type="number"
        name="departmentCode"
        placeholder="Department Code"
        value={data.departmentCode}
        onChange={handleChange}
      /><br />
      <input
        type="text"
        name="nameofDepartment"
        placeholder="Name of Department"
        value={data.nameofDepartment}
        onChange={handleChange}
      /><br />
      <input
        type="number"
        name="noofStudent"
        placeholder="Number of Students"
        value={data.noofStudent}
        onChange={handleChange}
      /><br />
      <button type="button" onClick={sendData}>Send Data</button>
      <p>{post ? JSON.stringify(post) : ''}</p>
      <p>{error}</p>
    </div>
  );
}

export default PostData;

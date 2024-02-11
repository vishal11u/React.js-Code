import React, { useState } from 'react';
import Reset2 from './Reset2';
function Reset() {
    const userObj = {
        firstname: " ",
        lastname: ""
    };
    const [user, setUser] = useState(userObj);
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };
    const handleData = () => {
        if (user.firstname === "" || user.lastname === "") {
            alert("Enter Proper Data")
        } else {
            setData([...data, user]);
            setUser(userObj);
        }
    }
    const updateData = (i) => {
        let id = data[i];
        setUser({ ...user, firstname: id.firstname, lastname: id.lastname });
        let cut = data.filter((demo, index) => index !== i)
        setData(cut);
    }

    return (
        <div className='bg-gray-100 h-screen'>
            <h1 className='text-center text-4xl font-semibold py-10'>Edit and Delete Form 📝</h1>
            <div className='flex justify-center '>
                <div className=' bg-white border h-[38vh] w-[25vw] text-center py-5 rounded-md shadow-lg '>
                    <input type="email" placeholder="firstname" className='border py-4 rounded-md mt-5 w-[20vw] hover:outline-blue-500 px-2 text-lg' name='firstname' onChange={handleChange} value={user.firstname || ""} /><br /><br />
                    <input type="email" placeholder='lastname' className='border py-4 rounded-md w-[20vw] hover:outline-blue-500 px-2 text-lg' name='lastname' onChange={handleChange} value={user.lastname || ""} /><br /><br />
                    <button className=' bg-blue-600 py-1 md:px-16 rounded-lg text-white font-semibold hover:bg-gray-200 hover:text-black transition-all  text-xl' onClick={handleData}>Submit</button>
                </div>
            </div>

            <Reset2 data={data} setData={setData} updateData={updateData} />
        </div>
    )
}

export default Reset;
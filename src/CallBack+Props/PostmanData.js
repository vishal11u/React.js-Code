import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostmanData = () => {
    const userData = {
        // id: "",
        name: "",
        username: ""
    };

    const [data, setData] = useState(userData);
    const [store, setStore] = useState([]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        Post();
    }, []);

    const Post = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.data)
            .then((res) => {
                setStore(res)
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name === "" && data.username === "") {
            alert("Enter Proper Imformation")
        } else {
            axios.post("https://jsonplaceholder.typicode.com/users", data)
                .then((response) => response.data)
                .then((res) => {
                    setStore([...store, res])
                });
            setData(userData);
        }
    };

    const handleReview = (list) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${list}`)
            .then((response) => response.data)
            .then((res) => {
                setData(res)
                console.log(res);
            });
    };

    return (
        <div className='bg-gray-100'>
            <div className='text-center text-4xl bg-yellow-100 py-6 font-semibold shadow'>
                <h1>
                    Postman Data Collection 📬
                </h1>
            </div>

            <div className='flex justify-center'>
                <div className='flex justify-center w-[45vw] rounded gap-8 py-8 mt-2 bg-indigo-200 shadow'>
                    {/* <input className='px-2 py-2 font-semibold outline-none' value={data.id || ""} name='id' type='text' placeholder='Id...' onChange={handleChange} /> */}
                    <input className='px-2 py-2 font-semibold outline-none' value={data.name || ""} name='name' type='text' placeholder='Name...' onChange={handleChange} />
                    <input className='px-2 py-2 font-semibold outline-none' value={data.username || ""} name='username' type='text' placeholder='Username...' onChange={handleChange} />
                    <button className='py-2 px-3 bg-red-600 text-white transition-all hover:bg-gray-700' type='button' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div className='pb-5 mt-3 flex justify-center'>
                <table className='bg-white'>
                    <thead>
                        <tr className='border border-black text-[20px] bg-blue-200'>
                            <th className='border border-black py-2 px-7'>Id.</th>
                            <th className='border border-black py-2 '>Name</th>
                            <th className='border border-black py-2'>Username</th>
                            <th className='border border-black py-2 px-5'>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.map((list) => (
                                <tr className='border border-black' key={list.id}>
                                    <td className='border border-black text-center'>{list.id}</td>
                                    <td className='border border-black px-2'>{list.name}</td>
                                    <td className='border border-black px-2'>{list.username}</td>
                                    <td className=' text-center py-1'><button className='text-[20px] py-1 px-2 rounded bg-gray-200 transition-all hover:scale-[1.1]' type='button'
                                        onClick={() => handleReview(list.id)}>🚨</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default PostmanData;
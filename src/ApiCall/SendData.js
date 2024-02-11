import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SendData = () => {
    const userObj = {
        id: "",
        userId: "",
        title: "",
        body: ""
    };

    const [name, setName] = useState(userObj);
    const [data, setData] = useState([]);

    const handleData = (e) => {
        setName({ ...name, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        Post();
    }, []);

    const Post = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.data)
            .then((ref) => {
                setData(ref)
            });
    };

    const handleSend = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", name)
            .then((response) => response.data)
            .then((ref) => {
                setData([...data, ref]);
            });
    };

    const handleReview = (item) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${item}`)
            .then((response) => response.data)
            .then((ref) => {
                console.log(ref)
            });
    };

    return (
        <div className='bg-gray-200'>
            <div className='text-center text-4xl font-semibold py-5 bg-yellow-50'>
                <h1>Api data Calling</h1>
            </div>
            <div className='py-8 bg-gray-400 flex justify-center items-center gap-10'>
                <input className='py-2 px-2 outline-none' type='text' name='id' placeholder='Id...' onChange={handleData} />
                <input className='py-2 px-2 outline-none' type='text' name='userId' placeholder='UserId...' onChange={handleData} />
                <input className='py-2 px-2 outline-none' type='text' name='title' placeholder='Title...' onChange={handleData} />
                <input className='py-2 px-2 outline-none' type='text' name='body' placeholder='Body...' onChange={handleData} />
                <button className='py-1 text-[21px] px-3 bg-red-500 text-white transition-all hover:scale-[1.1]' type='button' onClick={handleSend}>Submit</button>
            </div>
            <div className='mt-5 px-8'>
                <table className='bg-white'>
                    <tr style={{ border: "1px solid black" }}>
                        <th className='border border-black'>Id</th>
                        <th className='border border-black'>UserId</th>
                        <th className='border border-black'>Title</th>
                        <th className='border border-black'>Body</th>
                        <th className='border border-black'>Review</th>
                    </tr>
                    {
                        data.map((item) => (
                            <tr key={item.id} style={{ border: "1px solid black" }}>
                                <td className='border border-black text-center'>{item.id}</td>
                                <td className='border border-black text-center'>{item.userId}</td>
                                <td className='border border-black px-1'>{item.title}</td>
                                <td className='border border-black px-1'>{item.body}</td>
                                <td className='px-1'><button type='button' className='rounded text-center bg-green-500 py-1 px-1 font-semibold' onClick={() => handleReview(item.id)}>review</button></td>
                            </tr>
                        ))
                    };
                </table>
            </div>

        </div>
    )
}

export default SendData;
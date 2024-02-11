    import React, { useState } from 'react';
    import { MdDelete } from "react-icons/md";

    function Task() {
        const user = {
            message: ''
        };
        const [data, setData] = useState(user);
        const [send, setSend] = useState([]);
        const [checkedItems, setCheckedItems] = useState({});

        const handleChange = (e) => {
            setData({ ...data, [e.target.name]: e.target.value });
        };

        const handleSend = () => {
            if (data.message === "") {
                alert("Fill Input Feild")
            } else {
                setSend([...send, { ...data, checked: false }]);
                setData(user);
            }
        };

        const handledelete = (i) => {
            let cut = [...send];
            cut.splice(i, 1);
            setSend(cut);
        };

        const handleCheck = (i) => {
            const updatedCheck = { ...checkedItems };
            updatedCheck[i] = !updatedCheck[i];
            setCheckedItems(updatedCheck);
        };

        return (
            <div className="container mx-auto text-center pt-10 bg-gray-200 h-screen">
                <input type='text' name='message' value={data.message} placeholder='Enter Todo' onChange={handleChange} className="outline-none px-2 py-2 mr-2 shadow-lg" />
                <button type='button' onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Todo
                </button>
                <div className='flex justify-center w-full mt-5'>
                    <table className="mt-4 text-center border w-1/3">
                        <thead>
                            <tr className='bg-gray-800 text-white items-center'>
                                <th className='px-2 py-2 text-center'>Delete</th>
                                <th className='px-2 py-2 text-center'>Check</th>
                                <th className='px-2 py-2 text-center'>Todo</th>
                            </tr>
                        </thead>
                        {send.length > 0 ? (
                            <tbody className=''>
                                {send.map((item, i) => (
                                    <tr key={i} className='border-b  bg-white'>
                                        <td className='cursor-pointer py-2.5 flex justify-center items-center' onClick={() => handledelete(i)}>
                                            <MdDelete className='text-red-600' size={22} />
                                        </td>
                                        <td className='py-2'>
                                            <input type='checkbox' checked={checkedItems[i]} onChange={() => handleCheck(i)} />
                                        </td>
                                        <td className={'py-2 ' + (checkedItems[i] ? 'line-through' : '')}>{item.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan="3" className='text-center py-4 font-semibold text-gray-600'>Enter Some Data</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div >
        );
    }

    export default Task;

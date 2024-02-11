import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

function ArrayTask() {
    const demo = [
        {
            id: 1,
            name: "John",
            age: 11
        },
        {
            id: 2,
            name: "Mahesh",
            age: 25
        },
        {
            id: 3,
            name: "Johni",
            age: 19
        },
        {
            id: 4,
            name: "Mark",
            age: 16
        },
        {
            id: 5,
            name: "Elon",
            age: 10
        },
        {
            id: 6,
            name: "Jack",
            age: 50
        },
        {
            id: 7,
            name: "Alice",
            age: 30
        },
        {
            id: 8,
            name: "Bob",
            age: 22
        },
        {
            id: 9,
            name: "Emily",
            age: 40
        }
    ];

    const [task, setTask] = useState(demo);
    const [showAll, setShowAll] = useState(false);

    const handleDelete = (id) => {
        const updatedTask = task.filter(item => item.id !== id);
        setTask(updatedTask);
    };

    const handleFilter = () => {
        if (!showAll) {
            const filteredData = task.filter(item => item.age > 18);
            setTask(filteredData);
        } else {
            setTask(demo);
        }
        setShowAll(!showAll);
    };

    return (
        <div className="flex justify-center mt-12">
            <table className='border-collapse border border-gray-800 w-1/3'>
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className='px-3 py-2 font-medium'>Id</th>
                        <th className='px-3 py-2 font-medium'>Name</th>
                        <th className='px-3 py-2 font-medium'>Delete</th>
                        <th className='px-3 py-2 font-medium'>Age</th>
                        <th className='px-3 py-2 font-medium'>
                            <div className="flex items-center">
                                <input type='checkbox' onChange={handleFilter} className="mr-2"/>
                                <label>18+</label>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody> 
                    {task.map((item) => (
                        <tr key={item.id} className="border-t border-gray-800">
                            <td className='px-3 py-2 text-center'>{item.id}.</td>
                            <td className='px-3 py-2 text-center'>{item.name}</td>
                            <td className='px-3 py-2 text-center'>
                                <button className='text-red-600' type='button' onClick={() => handleDelete(item.id)}>
                                    <MdDelete/>
                                </button>
                            </td>
                            <td className='px-3 py-2 text-center'>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArrayTask;

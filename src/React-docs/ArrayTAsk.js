import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

function ArrayTask() {
    const demo = [
        {
            id: 1,
            name: "John",
            lname: "Doe",
            salary: "10,000",
            age: 11
        },
        {
            id: 2,
            name: "Mahesh",
            lname: "Dalle",
            salary: "40,000",
            age: 25
        },
        {
            id: 3,
            name: "Johni",
            lname: "Since",
            salary: "70,000",
            age: 19
        },
        {
            id: 4,
            name: "Mark",
            lname: "Zubarg",
            salary: "20,000",
            age: 16
        },
        {
            id: 5,
            name: "Elon",
            lname: "Musk",
            salary: "90,000",
            age: 10
        },
        {
            id: 6,
            name: "Jack",
            lname: "Snyder",
            salary: "50,000",
            age: 50
        },
        {
            id: 7,
            name: "Alice",
            lname: "Blue",
            salary: "80,000",
            age: 30
        },
        {
            id: 8,
            name: "Bob",
            lname: "Johnson",
            salary: "60,000",
            age: 22
        },
        {
            id: 9,
            name: "Emily",
            lname: "Machail",
            salary: "30,000",
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
            const filteredData = task.sort((a, b) => a.name > b.name ? 1 : -1);
            setTask(filteredData);
        } else {
            setTask(demo);
        }
        setShowAll(!showAll);
    };
    const handlelnameFilter = () => {
        if (!showAll) {
            const filteredData = task.sort((a, b) => a.lname > b.lname ? 1 : -1);
            setTask(filteredData);
        } else {
            setTask(demo);
        }
        setShowAll(!showAll);
    };
    const handlesalaryFilter = () => {
        if (!showAll) {
            const filteredData = task.sort((a, b) => a.salary > b.salary ? 1 : -1);
            setTask(filteredData);
        } else {
            setTask(demo);
        }
        setShowAll(!showAll);
    };
    const handleageFilter = () => {
        if (!showAll) {
            const filteredData = task.sort((a, b) => a.age > b.age ? 1 : -1);
            setTask(filteredData);
        } else {
            setTask(demo);
        }
        setShowAll(!showAll);
    };

    return (
        <div>
            <h1 className='text-center font-semibold mt-8 text-2xl'>Assending Order Cheak</h1>
            <div className='px-3 py-2 font-medium flex justify-center space-x-5 items-center mt-2'>
                <div className="flex items-center">
                    <input type='checkbox' onChange={handleFilter} className="mr-2" />
                    <label>First Name</label>
                </div>
                <div className="flex items-center">
                    <input type='checkbox' onChange={handlelnameFilter} className="mr-2" />
                    <label>Last name</label>
                </div>
                <div className="flex items-center">
                    <input type='checkbox' onChange={handlesalaryFilter} className="mr-2" />
                    <label>Salary</label>
                </div>
                <div className="flex items-center">
                    <input type='checkbox' onChange={handleageFilter} className="mr-2" />
                    <label>Age</label>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <table className='border-collapse border border-gray-800 w-1/3'>
                    <thead>
                        <tr className='bg-gray-800 text-white'>
                            <th className='px-3 py-2 font-medium'>Id</th>
                            <th className='px-3 py-2 font-medium'>Name</th>
                            <th className='px-3 py-2 font-medium'>Surname</th>
                            <th className='px-3 py-2 font-medium'>Age</th>
                            <th className='px-3 py-2 font-medium'>Salary</th>
                            <th className='px-3 py-2 font-medium'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task.map((item, e) => (
                            <tr key={item.id} className="border-t border-gray-800">
                                <td className='px-3 py-2 text-center'>{e + 1}.</td>
                                <td className='px-3 py-2 text-center'>{item.name}</td>
                                <td className='px-3 py-2 text-center'>{item.lname}</td>
                                <td className='px-3 py-2 text-center'>{item.age}</td>
                                <td className='px-3 py-2 text-center'>{item.salary}</td>
                                <td className='px-3 py-2 text-center'>
                                    <button className='text-red-600' type='button' onClick={() => handleDelete(item.id)}>
                                        <MdDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ArrayTask;
